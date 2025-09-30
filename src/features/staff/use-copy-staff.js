import {useSelector} from 'react-redux'
import {selectControlInfo} from '../control/control-slice'
import {selectOpeningInfo} from '../opening/opening-slice'
import {addZero, printTg} from '../../helpers/var'

export const useCopyStaff = (staffPerson) => {
    const {/*qualities, stand*/tg, sysselect, priority, effect} = useSelector(store => selectControlInfo(store).controls)
    const {isInside, openingTitle, jiraId, startTime, /*systemAdmins*/ systemBissnes, openingDescription} = useSelector(store => selectOpeningInfo(store).data)

    const inside = isInside ? `**ВНУТРЕННИЙ**\n` : ''
    //const standOut = stand ? `${stand} ` : ''
    //const qualitiesOut = qualities ? `${qualities}` : ''
    const person = staffPerson.filter(i => i.selected).map(i => i.userName).join(' ').trim()
    const printTgTxt = printTg(tg)

    const date = new Date(Date.parse(startTime))
    const day = addZero(date.getDate())
    const month = addZero(date.getMonth() + 1) // месяцы с 0 до 11
    const year = date.getFullYear()
    const hourStart = new Date(Date.parse(startTime)).getHours()
    const minutesStart = new Date(Date.parse(startTime)).getMinutes()
 
    const str = (
        `**FYI**` +
        `\n` +
        `\n${person}` +
        `\n` +
        `\n${inside}` +
        `**NEW**` +
        `\n` +
        `\n**${openingTitle}**` +
        `\n` +
        `\n${priority}` +
        `\n${sysselect}` +
        `\n${day}.${month}.${year} ${hourStart}:${minutesStart}` +
        `\n${effect}` +
        `\n${printTgTxt}` +
        `\nhttps://jira.crpt.ru/browse/OPS-${jiraId}` +
        `\n` +
        //`\n\`\`\`` +
        //`\n**Кто оповещён:** ${systemAdmins}` +
        //`\n` +
        `\n**Бизнес-аффект:** ${systemBissnes}` +
        `\n` +
        `\n**${hourStart}:${minutesStart}**` +
        `\n**Примечание:** ${openingDescription}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
