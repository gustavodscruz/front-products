import './index.css';

interface CardProps{
    title: String,
    price: number,
    image: string
}

export function Card({title, price, image}: CardProps){
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}