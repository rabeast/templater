import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectStaffInfo, resetStaff} from './staff-slice'
import './staffSummary.css'
import StaffItem from './StaffItem'
import {useCopyStaff} from './use-copy-staff'

const StaffSummary = ({setAlert, start, staff}) => {
    const dispatch = useDispatch()
    const {staffPerson} = useSelector(store => selectStaffInfo(store).data)
    const {copySummary} = useCopyStaff(staffPerson)

    useEffect(() => {
        const now = new Date()
        const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now

        const timer = setTimeout(() => {
            dispatch(resetStaff())
        }, millisTillMidnight)

        return () => clearTimeout(timer)
    }, [dispatch])

    return (
        <div
            id='staff'
            className={start ? 'card blue-grey darken-1' : !start && staff ? 'card blue-grey darken-1 card-opacity' : 'hide'}
        >
            <div className="card-content white-text summary-head">
                <div className="summary__checkbox-content">
                    <span className="card-title staff-title">FYI с пином + инцидент</span>
                </div>
            </div>

            <div className="card-action">
                <div className="summary__body summary__body-closing staff-list">
                    {staffPerson && staffPerson.map(i => <StaffItem key={i.userName} {...i} />)}
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

export default StaffSummary
