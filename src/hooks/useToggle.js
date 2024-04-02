import { useCallback, useState } from 'react';

export const useToggle = (initialValue = false) => {
    
    // Création d'un state pour stocker l'état du toggle
    const [isActive, setActive] = useState(initialValue);

    // Méthode qui permet d'inverser l'état du toggle
    const handleToggle = useCallback(() => {
        setActive(isActive => !isActive);
    }, []);

    // Envoi d'un tableau avec l'état et la méthode d'inversion
    // NB : Format tableau choisi pour "imité" un useState (Choix libre)
    return [isActive, handleToggle];
};
