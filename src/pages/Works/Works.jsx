import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";

import Masonry from 'react-masonry-css';

export default function Works(props) {

    let { filter } = useParams();

    const breakpointColumnsObj = {
        default: 3,
        768: 2,
        480: 1,
    };

    const renderCard = (filter) =>(
        props.data.map( card => (card.properties.Type.select.name === filter ? (<Card key={card.id} node={card} filter={filter}/>) : null ))
    )


    return (
        <div className="header-comp container">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column" >

                {renderCard(filter)}

            </Masonry>
        </div>
    )
}
