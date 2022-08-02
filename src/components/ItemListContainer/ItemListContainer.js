
import ItemCount from `ItemCount`;

function ItemListContainer({ text }) {

    return(
        <div>
            <h1>{ text }</h1>
            <ItemCount/>
        </div>
    )
};

export default ItemListContainer;