import "./Card.css"

function Card ({ img, name }) {
    return(
        <div className="Card">
            <img src={img} />
            <p>{name} </p>
        </div>
    )
}

export default Card;