import React, { useState, useEffect } from 'react';

import Masonry from 'react-masonry-css';

export default function CardsSection() {

    const breakpointColumnsObj = {
        default: 3,
        768: 2,
        480: 1,
      };

    const [data, setData] = useState([])

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(data) {
            console.log(data);
            setData(data);
          });
      }
      useEffect(()=>{
        getData()
      },[])

    return (
        <div className="header-comp container">
            <Masonry 
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column" >

                {
                    data.map( card => {
                        return(
                            <div key={ card.id } className="card">
                                <a href="">
                                    <figure className="image">
                                        <picture>
                                            <img src={ card.image } alt=""/>
                                        </picture>
                                    </figure>

                                    <figcaption>
                                        <span>{ card.title }</span>
                                    </figcaption>
                                </a>
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