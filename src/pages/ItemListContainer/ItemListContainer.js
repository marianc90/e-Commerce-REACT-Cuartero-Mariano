import { useEffect, useState } from "react";
import "./ItemListContainer.styles.css";
import loader from "../../assets/img/giphy.gif";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productList, setProductList] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getProducts = () => {

      const db = getFirestore();
      const querySnapshot = collection(db, 'items');
      const queryfilter = categoryId ? 
      query(querySnapshot, where('category', '==', categoryId)) : 
      querySnapshot;
    
      getDocs(queryfilter)
      .then((response) => {
        const data = response.docs.map(
        (doc) => {return {id: doc.id, ...doc.data() } }
        );
        setProductList(data);
        setCargando(false);})
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProducts();
  }, [categoryId]);
  
  return (
    <>
       <h2 className="itemlistcontainer__greeting">{categoryId ? categoryId : greeting}</h2>       
      {!cargando ? <ItemList lista={productList} /> : <img src={loader} alt="loader"></img>}
    </>
  )
}

export default ItemListContainer;