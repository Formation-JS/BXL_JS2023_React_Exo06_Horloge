import DateJour from '../../components/date-jour/date-jour.jsx'
import Horloge from '../../components/horloge/horloge.jsx'
import { useToggle } from '../../hooks/useToggle.js';

const DateOrTime = () => {

    const [displayDate, handleChange] = useToggle(false);

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