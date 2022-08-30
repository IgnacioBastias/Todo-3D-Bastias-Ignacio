import { getDocs, collection} from 'firebase/firestore'
import firestoreDB from '../services/firestore';


function traerData(id) {
    return new Promise((resolve) => {

        const productosCollection = collection(firestoreDB, "productos");

        getDocs(productosCollection).then(snapshot => {

            const docsData = snapshot.docs.map(doc => {
                return{...doc.data(), id: doc.id}
            });
            
            let itemPedido = docsData.find(
                (doc) => doc.id === id
            );

            if (id === undefined) resolve(docsData);
            else resolve(itemPedido);
        })

    });
}

// prueba

export default traerData;
