import {printTg, addZero} from '../../../helpers/var'
import {sendToTelegramChannel} from '../../../services/telegramApi'

export const useCopyOpening = (qualities, stand, tg, sysselect, priority, effect, isInside, openingTitle, jiraId, startTime, systemAdmins, systemBissnes, openingDescription) => {
    const inside = isInside ? `*ВНУТРЕННИЙ*\n` : ''
    const standOut = stand ? `${stand} ` : ''
    const qualitiesOut = qualities ? `${qualities}` : ''
    const printTgTxt = printTg(tg)
    
    const date = new Date(Date.parse(startTime))
    const day = addZero(date.getDate())
    const month = addZero(date.getMonth() + 1)
    const year = date.getFullYear()
    const hourStart = addZero(date.getHours())
    const minutesStart = addZero(date.getMinutes())

    // Для копирования в буфер (plain text)
    const generatePlainText = () => {
        return (
            `${inside}` +
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
            `\n**Бизнес-аффект:** ${systemBissnes}` +
            `\n` +
            `\n**${hourStart}:${minutesStart}**` +
            `\n**Примечание:** ${openingDescription}`
        )
    }

    // Для старого формата (простой текст)
const generateOldFormatText = () => {
    return (
        `${isInside ? '**ВНУТРЕННИЙ**\n' : ''}` +
        `**NEW**` +
        `\n**${standOut}${qualitiesOut}**` +
        `\n` +
        `\n**${openingTitle}**` +
        `\n**ТГ:** ${printTgTxt}` +
        `\n` +
        `\n**Приоритет:** ${priority}` +
        `\n**Степень влияния:** ${effect}` +
        `\nhttps://jira.crpt.ru/browse/OPS-${jiraId}` +
        `\n**Время инцидента:** ${addZero(hourStart)}:${addZero(minutesStart)}` +
        `\n**Кто оповещён:** ${systemAdmins}` +
        `\n` +
        `\n**Бизнес-аффект:** ${systemBissnes}` +
        `\n` +
        `\n**Примечание:** ${openingDescription}`
    )
}

    // Для отправки в Telegram (HTML)
    const generateHtmlText = () => {
        return (
            `<b>${isInside ? 'ВНУТРЕННИЙ<br/>' : ''}</b>` +
            `<b>NEW</b>` +
            `<br/><br/>` +
            `<b>${openingTitle}</b>` +
            `<br/><br/>` +
            `<blockquote>` + // ← Начало цитаты
            `<b>${priority}</b>` +
            `<br/>${sysselect}` +
            `<br/>${printTgTxt}` +
            `<br/>${day}.${month}.${year} ${hourStart}:${minutesStart}` +
            `<br/><a href="https://jira.crpt.ru/browse/OPS-${jiraId}">OPS-${jiraId}</a>` +
            `</blockquote>` + // ← Конец цитаты
            `<br/><br/>` +
            `<b>Бизнес-аффект:</b> ${systemBissnes}` +
            `<br/><br/>` +
            `<b>${hourStart}:${minutesStart}</b>` +
            `<br/><b>Примечание:</b> ${openingDescription}`
        )
    }

    const copySummary = () => {
        const text = generatePlainText() // ← Исправлено здесь!
        navigator.clipboard.writeText(text)
        document.execCommand("copy")
    }

    const copyOldFormat = () => {
    const text = generateOldFormatText()
    navigator.clipboard.writeText(text)
    document.execCommand("copy")
    return true
}

    const sendToTelegram = async () => {
    console.log('🔄 Генерируем HTML для Telegram...')
    const htmlContent = generateHtmlText()
    console.log('📝 HTML контент:', htmlContent)
    
    const result = await sendToTelegramChannel(htmlContent)
    console.log('📋 Результат отправки:', result)
    return result
}

    return { copySummary, sendToTelegram, copyOldFormat, generatePlainText}
}