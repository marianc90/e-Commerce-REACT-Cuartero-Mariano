import { useEffect, useState } from "react";
import "./ItemListContainer.styles.css";
import data from "../mockData.js";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts
    .then((response) => {
      setProductList(response);
    })
    .catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000)
      });
  
  return (
    <>
        <h2 className="itemlistcontainer__greeting">{greeting}</h2>
        <ItemList lista={productList} />
        <ItemCount stock={10} initial={0}/>
    </>
  )
}

export default ItemListContainer;