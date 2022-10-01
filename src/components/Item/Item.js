import "./Item.styles.css";

const Item = ({title, price, image}) => {
  return (
    <div className="item-listed">
    <img src={image} alt={title} />
    <br></br>
    <br></br>
    <h2>{title}</h2>
    <p>${price}.-</p>
    </div>
  )
}

export default Item