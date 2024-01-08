import { addDoc, collection } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FirebaseApi';

export const setEntry = async (data) => {
    try {
        await addDoc(collection(FirebaseDB, 'entradas'), data);
    } catch (error) {
        console.error('Error al agregar el documento: ', error);
        throw new Error(error.message);
    }
};
