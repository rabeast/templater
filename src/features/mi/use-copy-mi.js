import {printTg, addZero} from '../../helpers/var'

export const useCopyMi = ({stand, tg, sysselect, priority, startTime, support, dev, miNumber, title, toGo, toDev, calls}) => {
    const standOut = stand ? `${stand} ` : ''
    const printTgTxt = printTg(tg)

    const description =  dev
        ? `Массовый инцидент передан ${toGo}. Заведена задача на разработку ${toDev}.\nНа данный момент зафиксировано ${calls} обращений от УОТ.`
        : `Массовый инцидент передан ${toGo}.\nНа данный момент зафиксировано ${calls} обращений от УОТ.`

    const date = new Date(Date.parse(startTime))
    const day = addZero(date.getDate())
    const month = addZero(date.getMonth() + 1)
    const year = date.getFullYear()
    const hourStart = addZero(date.getHours())
    const minutesStart = addZero(date.getMinutes())

    const str = (
        `**MI NEW**` +
        `\n` +
        `\n**${title}**` +
        `\n` +
        `\n${priority}` +
        `\n${sysselect}` +
        `\n${standOut}` +
        `\n${printTgTxt}` +
        `\n${day}.${month}.${year} ${hourStart}:${minutesStart}` +
        `\n` +
        `\n**${support} завела массовый инцидент** MI${miNumber}.` +
        
        `\n` +
        `\n${description}`
    )

    const copySummary = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copySummary}
}
