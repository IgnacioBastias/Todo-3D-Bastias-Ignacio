import { getDocs, collection, query, where } from 'firebase/firestore'
import firestoreDB from '../services/firestore';


function traerData(titulo, category) {
    return new Promise((resolve) => {

        const productosCollection = collection(firestoreDB, "productos");

        if (category !== undefined) {


            const qCategory = query(productosCollection, where("tipo", "==", category))
            getDocs(qCategory).then(snapshot => {

                const queryData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })

                resolve(queryData);
            })

        } else if (titulo !== null) {

            const qTitulo = query(productosCollection, where("titulo", "==", titulo))
            getDocs(qTitulo).then(snapshot => {

                const queryData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
                
                resolve(...queryData);
            })

        } else {

            getDocs(productosCollection).then(snapshot => {

                const docsData = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                });

                resolve(docsData);
            })
        }
    });
}


export default traerData;
