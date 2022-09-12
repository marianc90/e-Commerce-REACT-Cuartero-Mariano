import data from "../../components/mockData.js";
import "./itemDetailContainer.styles.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id }= useParams()
    const [item, setItem] = useState([]);

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
    })
    .catch((error) => console.log(error));
    }

  return (
    <>
    <ItemDetail producto={item} />
    </>
  )
}

export default ItemDetailContainer
