import { useCallback, useState } from 'react'
import DateJour from '../../components/date-jour/date-jour.jsx'
import Horloge from '../../components/horloge/horloge.jsx'

const DateOrTime = () => {

    const [displayDate, setDisplayDate] = useState(false);

    const handleChange = useCallback(() => {
        setDisplayDate(displayDate => !displayDate);
    }, []);

    return (
        <div>
            {displayDate ? (
                <DateJour />
            ) : (
                <Horloge />
            )}
            {/* {true ? <DateJour /> : <Horloge />} */}
            <button onClick={handleChange}>Change !</button>
        </div>
    )
}

export default DateOrTime;