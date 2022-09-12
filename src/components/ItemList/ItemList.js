import Item from "../Item/Item";
import './ItemList.styles.css';
import { NavLink } from 'react-router-dom';

const ItemList = ({lista}) => {
  return (
    <div className="item-list">
        {lista.map((product) => (
                <NavLink to={'/item/' + product.id} className='items-links' key={product.id}>
                <Item 
                title={product.title} 
                price={product.price} 
                image={product.image} 
                />
                </NavLink>
            ))}
    </div>
  )
}

export default ItemList