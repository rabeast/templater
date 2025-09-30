import TextareaAutosize from 'react-textarea-autosize'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import '../opening/openingSummary.css'

import {useClosing} from './hooks/use-closing'

const ClosingSummary = ({setAlert}) => {
    const {
        copySummary,
        handelChange,

        stand,
        qualities,
        tg,
        priority,
        sysselect,
        effect,

        isInside,
        openingTitle,
        jiraId,
        systemAdmins,
        systemBissnes,

        setFinishDate,
        finishDate,
        closingDescription,
        durationIncident,
    } = useClosing()

    return(
        <div className="card blue-grey darken-1">
            <div className="card-content white-text summary-head">

                <div className="summary__checkbox-content">
                    <span className={isInside ? 'card-title' : 'hide'}>{isInside ? 'ВНУТРЕННИЙ' : null}</span>
                    <span className="card-title">CLOSED</span>
                </div>

                <span className="card-title"><span>{stand}</span> <span>{qualities}</span></span>
            </div>

            <div className="card-action">
                <div className="summary__body summary__body-closing">
                    <p>{openingTitle}</p>

                    <p>Приоритет: <span>{priority}</span></p>
                    <p>Система: <span>{sysselect}</span></p>
                    <p>ТГ: <span>{tg}</span></p>
                    {/*<p>Степень влияния: <span>{effect}</span></p>*/}
                    <p>OPS-{jiraId}</p>

                    <div className='summary__time m0'>
                        <div className='summary__time-title'>Окончание инцидента:</div>
                        <DatePicker
                            selected={finishDate}
                            onChange={(date) => setFinishDate(date)}
                            showTimeSelect
                            dateFormat="dd.MM.yyyy HH:mm"
                            timeFormat={"HH:mm"}
                        />
                    </div>

                    <p>Длительность: <span className='blue-text text-accent-1'>{durationIncident}</span></p>

                    <p>Кто оповещен: <span>{systemAdmins}</span></p>

                    <p>Бизнес-аффект: <span>{systemBissnes}</span></p>

                    <p>Примечание:</p>
                    <TextareaAutosize
                        className='summary__area'
                        value={closingDescription}
                        name="notesClosing"
                        placeholder='Решение проблемы...'
                        onChange={handelChange}
                    />
                </div>
            </div>

            <div className="txt-out__card-footer">
                <button
                    className="btn-floating waves-effect waves-light main__action-btn-green"
                    onClick={() => {
                        setAlert(true)
                        copySummary()
                    }}
                >
                    <i className="material-icons">content_copy</i>
                </button>
            </div>
        </div>
    )

}

export default ClosingSummary
