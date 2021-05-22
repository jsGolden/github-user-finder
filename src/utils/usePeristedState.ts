import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        async function fetchStoragedValue() {
            const storagedValue = await AsyncStorage.getItem(key);
            storagedValue && setState(JSON.parse(storagedValue))
        }
        fetchStoragedValue();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export { usePersistedState };