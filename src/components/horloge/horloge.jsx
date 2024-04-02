import { useEffect } from 'react';
import { useState } from 'react';

const Horloge = () => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timerId = setTimeout(() => { 
            setNow(new Date());
            console.log('Tic / Tac');
        }, 200);

        return () => {
            clearTimeout(timerId);
        }
    });

    const hours = now.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 });
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds();

    return (
        <p>{hours} : {minutes} : {seconds < 10 && '0'}{seconds}</p>
    );
};

export default Horloge;