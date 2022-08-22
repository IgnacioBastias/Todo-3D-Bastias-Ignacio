import itemsData from "../data/itemsData";

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