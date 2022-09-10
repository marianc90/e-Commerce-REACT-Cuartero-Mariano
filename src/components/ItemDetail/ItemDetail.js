import "./ItemDetail.styles.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail__container">
      <div className="item-detail__imagen">
          <img src={producto.image} alt={producto.title} />
      </div>
      <div className="item-detail__contenido">
          <h1>{producto.title}</h1>
          <h4>Precio final: ${producto.price}.-</h4>
          <h5>{producto.description}</h5>
          <i>Stock disponible: {producto.stock}</i>
      </div>
    </div>
  )
}

export default ItemDetail