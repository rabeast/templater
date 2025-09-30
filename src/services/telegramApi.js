export const sendToTelegramChannel = async (htmlContent, channelId = -1001222911260) => {
    try {
        console.log('📤 Отправляем в Telegram:', htmlContent)
        
        const response = await fetch('https://jazz.crpt.tech/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: htmlContent,
                channel: channelId
            })
        })

        console.log('📨 Ответ сервера:', response.status)
        
        if (response.ok) {
            return { success: true }
        } else {
            throw new Error(`Ошибка HTTP: ${response.status}`)
        }
    } catch (error) {
        console.error('❌ Ошибка отправки:', error)
        return { success: false, error: error.message }
    }
}