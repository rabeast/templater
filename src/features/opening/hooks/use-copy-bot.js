import {addZero} from '../../../helpers/var'
import {getDaysToPrint} from '../../../helpers/getDaysToPrint'

export const useCopyBot = (stand, openingTitle, startTime, openingDescription) => {
    const standOut = stand ? `${stand}` : ''
    const hourStart = new Date(Date.parse(startTime)).getHours()
    const minutesStart = new Date(Date.parse(startTime)).getMinutes()
    const dateOut = getDaysToPrint(new Date(Date.parse(startTime)))

    const str = (
        `#Problem` +
        `\nТема - ${openingTitle}` +
        `\nКонтур - ${standOut}` +
        `\nВремя начала инцидента - ${dateOut}, ${addZero(hourStart)}:${addZero(minutesStart)}` +
        `\nОписание - Ведется анализ`
    )

    const copyBot = () => {
        navigator.clipboard.writeText(str)
        document.execCommand("copy")
    }

    return {copyBot}
}
