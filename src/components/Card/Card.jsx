import { Link } from "react-router-dom";
import { Image } from "../Image/Image";

export default function Card({ card, filter }) {
    return (
        <div className="card">
            <Link to={`/${filter}/${card.id}`}>
                <figure className="image">
                    <Image image={card.image} extra={card.image_info}/>
                </figure>

                <figcaption>
                    <span>{card.title}</span>
                </figcaption>
            </Link>
            <ul>
                <li>{card.tags}</li>
            </ul>
        </div>

    )

}