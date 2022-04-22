import React, { useState, useEffect } from 'react';

export default function CardsSection() {

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
        <div className="header-comp container mansory-grid">
            {
                data.map( card => {
                    return(
                        <div key={ card.id } className="card one-three">
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
        </div>
        
    )
}