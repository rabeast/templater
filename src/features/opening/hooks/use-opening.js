import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectControlInfo} from '../../control/control-slice' // ← исправлен путь
import {selectOpeningInfo, setInside, setTitle, setJiraId, setStartTime, setAdmins, setBissnes, setOpeningDescription} from '../opening-slice'

import {sortTg} from '../../../helpers/var' // ← исправлен путь
import {useCopyOpening} from './use-copy-opening'
import {useCopyBot} from './use-copy-bot'

export const useOpening = () => {
    const dispatch = useDispatch()
    const {qualities, stand, tg, sysselect, priority, effect} = useSelector(store => selectControlInfo(store).controls)
    const {isInside, openingTitle, jiraId, startTime, systemAdmins, systemBissnes, openingDescription} = useSelector(store => selectOpeningInfo(store).data)
    const {copySummary, sendToTelegram, copyOldFormat} = useCopyOpening(qualities, stand, tg, sysselect, priority, effect, isInside, openingTitle, jiraId, startTime, systemAdmins, systemBissnes, openingDescription)
    const {copyBot} = useCopyBot(stand, openingTitle, startTime, openingDescription)
    const [startDate, setStartDate] = useState(new Date())
    const [isWarning, setWarning] = useState(false)
    const [isPrimary, setPrimary] = useState(false)
    const [isSending, setIsSending] = useState(false)

    const handelInside = () => {
        dispatch(setInside())
    }

    const onWriteInput = (event) => {
        const {name, value} = event.target
        if (name === 'problem') dispatch(setTitle(value))

        if (name === 'ops') {
            if (value.length < 6) setPrimary(false)
            if (value.length === 6) {
                setWarning(false)
                setPrimary(true)
            }

            if (value === '' || (Number(value) && value.length < 7)) dispatch(setJiraId(value))
        }

        if (name === 'admins') dispatch(setAdmins(value))
        if (name === 'bissnes') dispatch(setBissnes(value))
        if (name === 'description') dispatch(setOpeningDescription(value))
    }

   const handleSendToTelegram = async () => {
    console.log('🎯 Начало отправки в Telegram...')
    setIsSending(true)
    try {
        const result = await sendToTelegram()
        console.log('✅ Отправка завершена:', result)
        return result
    } catch (error) {
        console.error('❌ Ошибка в handleSendToTelegram:', error)
        return { success: false, error: error.message }
    } finally {
        setIsSending(false)
    }
}

    useEffect(() => {
        if (startDate) dispatch(setStartTime(startDate.toString()))
    }, [startDate])

    return {
        copySummary,
        copyBot,
        copyOldFormat,
        handleSendToTelegram,
        handelInside,
        onWriteInput,

        isPrimary,
        isSending,

        qualities,
        tg: sortTg(tg),
        priority,
        sysselect,
        effect,

        isInside,
        openingTitle,
        jiraId,
        systemAdmins,
        systemBissnes,
        openingDescription,

        startDate,
        setStartDate,

        isWarning,
        setWarning,
    }
}