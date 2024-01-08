import { collection, getDocs, query, limit, startAfter } from 'firebase/firestore/lite';
import { FirebaseDB } from '../FirebaseApi';

export const getEntries = async (pageParam = null) => {
    const queryConstraints = [];
    if (pageParam) {
        queryConstraints.push(startAfter(pageParam));
    }
    const q = query(collection(FirebaseDB, 'entradas'), ...queryConstraints, limit(70));
    const querySnapshot = await getDocs(q);
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return { lastVisible: newLastVisible, dataEntries: data };
};
