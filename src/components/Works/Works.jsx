import React from 'react';

import { Link } from "react-router-dom";

import Masonry from 'react-masonry-css';

export default function Works(props) {

    const breakpointColumnsObj = {
        default: 3,
        768: 2,
        480: 1,
    };


    return (
        <div className="header-comp container">
            <Masonry 
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column" >

                {
                    props.data.map( card => {
                        return(
                            <div key={ card.id } className="card">
                                <Link to={`/work/${card.id}`}>
                                    <figure className="image">
                                        <picture>
                                            <img src={ card.image } alt=""/>
                                        </picture>
                                    </figure>

                                    <figcaption>
                                        <span>{ card.title }</span>
                                    </figcaption>
                                </Link>
                                <ul>
                                    <li>{ card.multi_select }</li>
                                </ul>
                            </div>
                        )

                    })
                }

            </Masonry>
        </div>
        
    )
}