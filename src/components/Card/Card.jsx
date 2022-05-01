import { Link } from "react-router-dom";

export default function Card({ node, filter }) {
    return (
        <div className="card">
            <Link to={`/${filter}/${node.id}`}>
                <figure className="image">
                    <picture>
                        <img src={node.properties.Image.files[0].file.url} alt="" />
                    </picture>
                </figure>

                <figcaption>
                    <span>{node.properties.Name.title[0].plain_text}</span>
                </figcaption>
            </Link>
            <ul>
                <li>{node.properties.Tags.multi_select.map(select => (select.name)).join(', ')}</li>
            </ul>
        </div>

    )

}