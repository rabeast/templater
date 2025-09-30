import { addZero } from '../../../helpers/var' // Импортируем addZero

export const useCopyUpdate = (stand, qualities, isInside, updateDescription, status) => {
    const inside = isInside ? `**ВНУТРЕННИЙ**\n` : ''
    //const standOut = stand ? `${stand}` : ''
    //const qualitiesOut = qualities ? ` ${qualities}` : ''

    const now = new Date(); // Создаем объект Date для текущего момента
    const hourStart = addZero(now.getHours()); // Получаем текущий час
    const minutesStart = addZero(now.getMinutes()); // Получаем текущие минуты

    const str = (
        `${inside}` +
        `**${status}**` +
      //`\n**${standOut}${qualitiesOut}**` +
        `\n` + // ← ДОБАВЛЕН ПУСТАЯ СТРОКА
        `\n**${hourStart}:${minutesStart}**` + // Теперь переменные определены 
        `\n${updateDescription}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
