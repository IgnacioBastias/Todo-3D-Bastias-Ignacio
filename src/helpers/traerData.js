import itemsData from "../components/data/itemsData";

function traerData() {
    return new Promise((resolve) => {

        setTimeout(() =>
            resolve(itemsData), 1000
        );
    });
}

export default traerData;