import loader from "../../assets/img/giphy.gif";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {  getFirestore, doc, getDoc } from 'firebase/firestore';

const MyOrder = () => {
    const [cargando, setCargando] = useState(false);
    const [cargado, setCargado] = useState(false);
    const [order, setOrder] = useState(0);
    const [results, setResults] = useState("")
    const  navigate = useNavigate();

    const getOrder = () => { 
        let buscar = document.getElementById('buscar');
        if (buscar.value != ""){
        setCargando(true)
        setCargado(false);
        const db = getFirestore();
        const queryDoc = doc(db, 'orders', buscar.value);   

        getDoc(queryDoc)
        .then((response) => {
            setOrder({id: response.id, ...response.data()});
        })
        .catch((err) => alert("Error en el Servidor"), setCargando(false)); 
         }
        }
    const seekOrder = () => {
        getOrder()
     };

     useMemo(() => {
     setCargando(false);
     if (order != 0) { 
        if (order?.buyer){
            setCargado(true);
        } else {
            setCargado(false);
            setOrder(0);
            setResults("No hay resultados");
        }
     } 
    }, [order])
     

  return (
    <>
    <h2 style={{color:"white", marginTop:"200px"}}>Ingrese su Nro de Orden</h2>
    <input name="buscar" id="buscar"></input>
    <button onClick={seekOrder}>Buscar</button>
    {cargando && <img src={loader} alt="loader"></img>}
    {cargado ? <div style={{color:"white", backgroundColor:"#282C34", padding:"20px", marginBottom:"30vh"}}>Orden Nro: {order.id} <br></br> Precio Total: $ {order.total} {order.items.map(element=><p key={element.id}>{element.title} x {element.quantity}</p>)}</div> : <div style={{color:"white", padding:"20px", marginBottom:"50vh"}}>{results}</div>}
    {cargado && <button onClick={() => navigate(-1)} className="cart__card--finalizar--boton">Regresar</button>}
    </>
  )
}

export default MyOrder