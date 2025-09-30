import TextareaAutosize from 'react-textarea-autosize'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './openingSummary.css'
import TelegramButton from '../../components/TelegramButton' // ← Добавлен импорт
import {useOpening} from './hooks/use-opening'

const OpeningSummary = ({setAlert}) => {
    const {
        copySummary,
        copyOldFormat,
        copyBot,
        handleSendToTelegram, // ← Добавлено
        //handelInside,
        onWriteInput,

        isPrimary,
        isSending, // ← Добавлено

        stand,
        qualities,
        tg,
        priority,
        sysselect,
        effect,

        isInside,
        openingTitle,
        jiraId,
        //systemAdmins,
        systemBissnes,
        openingDescription,

        startDate,
        setStartDate,

        isWarning,
        setWarning,
    } = useOpening()

    const handleTelegramSend = async () => {
    console.log('🖱️ Кнопка Telegram нажата!')
    const result = await handleSendToTelegram()
    if (result && result.success) {
        console.log('🎉 Успех! Показываем уведомление...')
        setAlert(true)
    } else {
        console.error('💥 Ошибка отправки:', result.error)
    }
}

    return(
        <div className="card blue-grey darken-1">
            <div className="card-content white-text summary-head">

                <div className={isInside ? 'summary__checkBox summary__checkBox-topCheckBox' : 'summary__checkBox'}>
                    <div className="summary__checkbox-content">
                        <span className={isInside ? 'card-title amber-text text-lighten-3' : 'hide'}>{isInside ? 'ВНУТРЕННИЙ' : null}</span>
                        <span className="card-title">NEW</span>
                    </div>
                </div>

                <span className="card-title"><span className='red-text text-lighten-3 colorCoral'>{stand}</span> <span className='colorAqua'>{qualities}</span></span>
            </div>

            <div className="card-action">
                <div className="summary__body">
                    <div className="bot-topic">*</div>

                    <TextareaAutosize
                        className='summary__area'
                        value={openingTitle}
                        name="problem"
                        placeholder='Тема...'
                        onChange={onWriteInput}
                    />

                    <p>Приоритет: <span>{priority}</span></p>
                    <p>Система: <span>{sysselect}</span></p>
                     <div className='summary__time'>
                        <div className='summary__time-title bot'>Начало инцидента:</div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="dd.MM.yyyy HH:mm"
                            timeFormat={"HH:mm"}
                        />
                    </div>

                    <p>ЗО: <span>{effect}</span></p>

                    <p>ТГ: <span>{tg}</span></p>

                    <div className="summary__ops">
                        <p className={isWarning ? '#78909c lighten-1' : null}>OPS-</p>
                        <input
                            value={jiraId}
                            name='ops'
                            className={isPrimary ? 'form__input summary__ops-input summary__ops-input-colors' : 'form__input #78909c darken-1 summary__ops-input'}
                            placeholder='000000'
                            type="text"
                            onChange={onWriteInput}
                            onBlur={ e => e.target.value.length < 6 && setWarning(true) }
                        />
                    </div>

                   
                    
                    <div className='summary__bissnes'>
                        <div className='summary__bissnes-title'>Бизнес-аффект:</div>
                        <TextareaAutosize
                            className='summary__area'
                            value={systemBissnes}
                            name="bissnes"
                            onChange={onWriteInput}
                        />
                    </div>

                    <p className='bot'>Примечание:</p>

                    <TextareaAutosize
                        className='summary__area'
                        value={openingDescription}
                        name="description"
                        placeholder='Описание проблемы...'
                        onChange={onWriteInput}
                    />
                </div>
            </div>

            <div className="txt-out__card-footer">
                <button
                    className="btn-floating waves-effect waves-light main__action-btn-green mr15"
                    onClick={() => {
                        setAlert('bot-copy')
                        copyBot()
                    }}
                >
                    <i className="material-icons">adb</i>
                </button>

                <button
                    className="btn-floating waves-effect waves-light main__action-btn-green mr15"
                    onClick={() => {
                        setAlert('summary-copy')
                        copySummary()
                    }}
                >
                    <i className="material-icons">content_copy</i>
                </button>

                <TelegramButton
                    onClick={handleTelegramSend}
                    isLoading={isSending}
                />
            </div>
        </div>
    )
}

export default OpeningSummary