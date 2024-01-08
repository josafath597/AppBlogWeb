import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { getEntries } from '../FirebaseProviders/Providers/getEntries';

export const EntriesContext = createContext();

export function EntriesProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [entries, setEntries] = useState([]);
    const [baseEntries, setBaseEntries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [entriesDocuments, setEntriesDocuments] = useState([]);
    const [page, setPage] = useState(1);

    const fetchClients = async () => {
        try {
            setIsLoading(true);
            const { dataEntries, lastVisible } = await getEntries(null);
            setEntries(dataEntries);
            setBaseEntries(dataEntries);
            setEntriesDocuments([lastVisible]);
            setPage(1);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const nextPage = async () => {
        try {
            setIsLoading(true);
            const { dataEntries, lastVisible } = await getEntries(entriesDocuments[page - 1], 10);
            setEntries(dataEntries);
            setBaseEntries(dataEntries);
            setEntriesDocuments((prev) => [...prev, lastVisible]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const prevPage = async () => {
        if (page > 1) {
            try {
                setIsLoading(true);
                const lastDocument = page < 3 ? null : entriesDocuments[page - 3];
                const { dataEntries } = await getEntries(lastDocument, 10);
                setEntries(dataEntries);
                setBaseEntries(dataEntries);
                setEntriesDocuments((prev) => prev.slice(0, -1));
                setPage((prevPage) => Math.max(prevPage - 1, 1));
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    };
    const contextValue = {
        entries,
        baseEntries,
        isLoading,
        page,
        open,
        setEntries,
        setBaseEntries,
        setIsLoading,
        setOpen,
        fetchClients,
        nextPage,
        prevPage
    };

    return <EntriesContext.Provider value={contextValue}>{children}</EntriesContext.Provider>;
}

EntriesProvider.propTypes = {
    children: PropTypes.node.isRequired
};
