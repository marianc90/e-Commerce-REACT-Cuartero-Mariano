import data from "../../components/mockData.js";
import loader from "../../assets/img/giphy.gif";
import "./itemDetailContainer.styles.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const { id }= useParams()
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getProducts()
    }, []);
    
    const getProducts = () => {new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })
    .then((response) => {
        setItem(response.find(producto => producto.id == id)); 
        setCargando(false)
    })
    .catch((error) => console.log(error));
    }

  return (
    <>
    {!cargando ? <ItemDetail producto={item} /> : <img src={loader} alt="loader"></img>}
    </>
  )
}

export default ItemDetailContainer
