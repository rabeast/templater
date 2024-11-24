import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {setControl} from './control-slice'

export const useControlPanel = () => {
    const dispatch = useDispatch()

    const [isStand, setStand] = useState(null);
    const [isQualities, setQualities] = useState(null);
    const [isSelectTG, setSelectTG] = useState(null);
    const [isSelectPriority, setSelectPriority] = useState(null);
    const [isSelectEffect, setSelectEffect] = useState(null);
    const [isSelectStatus, setSelectStatus] = useState(null);

    // componentDidUpdate
    useEffect(() => {
        dispatch(setControl(
            {
                stand: isStand && isStand.value,
                qualities: isQualities && isQualities.value,
                tg: isSelectTG && isSelectTG,
                priority: isSelectPriority && isSelectPriority.value,
                effect: isSelectEffect && isSelectEffect.value,
                status: isSelectStatus && isSelectStatus.value,
            }
        ))
    }, [isQualities, isStand, isSelectTG, isSelectPriority, isSelectEffect, isSelectStatus, dispatch])

    return {setStand, setQualities, setSelectTG, setSelectPriority, setSelectEffect, setSelectStatus}
}
