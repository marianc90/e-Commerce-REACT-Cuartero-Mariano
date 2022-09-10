import data from "../mockData.js";
import "./itemDetailContainer.styles.css";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [itemSelected, setItemSelected] = useState("2");

    useEffect(() => {
        getProducts
        .then((response) => {
            setItem(response.find(producto => producto.id == itemSelected)); 
        })
        .catch((error) => console.log(error));
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })

  return (
    <>
    <ItemDetail producto={item} />
    </>
  )
}

export default ItemDetailContainer
