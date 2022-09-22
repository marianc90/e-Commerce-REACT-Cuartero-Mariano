import { useEffect, useState } from "react";
import "./ItemListContainer.styles.css";
import data from "../../components/mockData.js";
import loader from "../../assets/img/giphy.gif";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productList, setProductList] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProducts
    .then((response) => {
      categoryId ? 
      setProductList(response.filter(item => item.category == categoryId)) :
      setProductList(response);
      setCargando(false);
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
      {!cargando ? <ItemList lista={productList} /> : <img src={loader} alt="loader"></img>}
    </>
  )
}

export default ItemListContainer;