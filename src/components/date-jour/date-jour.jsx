
const DateJour = () => {

    const today = (new Date()).toLocaleDateString('fr-be', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <p>{today}</p>
    );
};

export default DateJour;