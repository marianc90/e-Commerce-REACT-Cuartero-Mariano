import loader from "../../assets/img/giphy.gif";
import "./itemDetailContainer.styles.css";
import ItemDetail from "../../components/ItemDetail/ItemDetail.js";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import {  getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const { id }= useParams()
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(true);
    const  navigate = useNavigate();
    
    const getProduct = () => { 

        const db= getFirestore();
        const queryDoc = doc(db, 'items', id);   

        getDoc(queryDoc)
        .then((response) => {
            setItem({id: response.id, ...response.data()});
            setCargando(false);})
        .catch((err) => console.log(err)); 
    }

    useEffect(() => {
       getProduct()
    }, []);

  return (
    <>
    {!cargando ? <ItemDetail producto={item} /> : <img src={loader} alt="loader"></img>}
    {!cargando && <button onClick={() => navigate(-1)} className="cart__card--finalizar--boton">Regresar</button>}
    </>
  )
}

export default ItemDetailContainer
