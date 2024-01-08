import { useContext } from 'react';
import { EntriesContext } from '../Context/EntriesProvider';

const useEntriesContext = () => {
    const context = useContext(EntriesContext);

    if (!context) {
        throw new Error('context must be use inside provider');
    }

    return context;
};

export default useEntriesContext;
