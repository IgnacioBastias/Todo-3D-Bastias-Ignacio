import itemsData from "../data/itemsData";
import { getDocs, collection, query, where } from 'firebase/firestore'

function traerData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemPedido = itemsData.find(
                (producto) => producto.id === Number(id)
            );

            if (id === undefined) resolve(itemsData);
            else resolve(itemPedido);
        }, 1000);
    });
}

export default traerData;

// const getItemsFromDB = () => {
//     return new Promise((resolve) => {
//       const todosCollection = collection(firestoreDB, "todos");
  
//       getDocs(todosCollection).then( snapshot => {
//         const docsData = snapshot.docs.map( doc => doc.data());
//         resolve(docsData);
//         });
//       })      
//   };
  