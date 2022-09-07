import Item from "../Item/Item"
const ItemList = ({lista}) => {
  return (
    <div>
        {lista.map((product) => (
                <Item 
                key={product.id}
                title={product.title} 
                price={product.price} 
                image={product.image} 
                />
            ))}
    </div>
  )
}

export default ItemList