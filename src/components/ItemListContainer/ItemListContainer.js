import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
        <h2 className="itemlistcontainer__greeting">{greeting}</h2>
        <ItemCount stock={10} initial={0}/>
    </div>
  )
}

export default ItemListContainer;