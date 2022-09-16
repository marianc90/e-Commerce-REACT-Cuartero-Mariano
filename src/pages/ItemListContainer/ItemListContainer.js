import { useEffect, useState } from "react";
import "./ItemListContainer.styles.css";
import data from "../../components/mockData.js";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts
    .then((response) => {
      categoryId ? 
      setProductList(response.filter(item => item.category == categoryId)) :
      setProductList(response);
    })
    .catch((error) => console.log(error));
  }, [categoryId]);

  const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000)
      });
  
  return (
    <>
       <h2 className="itemlistcontainer__greeting">{categoryId ? categoryId : greeting}</h2>
        <ItemList lista={productList} />
    </>
  )
}

export default ItemListContainer;