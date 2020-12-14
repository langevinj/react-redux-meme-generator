import React, { useState } from 'react';

function useLocalStorage(key, initial_state = null) {
    const initialValue = localStorage.getItem(key) || initial_state;

    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        if(!item){
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, item);
        }
    }, [key, item]);

    return [item, setItem];
}
export default useLocalStorage;