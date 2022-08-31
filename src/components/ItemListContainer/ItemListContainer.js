import "./ItemListContainer.styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div><h2 className="itemlistcontainer__greeting">{greeting}</h2></div>
  )
}

export default ItemListContainer;