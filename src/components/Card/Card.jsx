import { Link } from "react-router-dom";

export default function Card({ card, filter }) {
    return (
        <div className="card">
            <Link to={`/${filter}/${card.id}`}>
                <figure className="image">
                    <picture>
                        <img src={card.image} alt="" />
                    </picture>
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