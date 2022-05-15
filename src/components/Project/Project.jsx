import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import { useParams } from "react-router-dom";
import Article from "../Article/Article";


export default function Project({data}) {
    let { id } = useParams();
    

    const [project, setProject] = useState([])

    useEffect(() => {
        const getProjectFromBackEnd = () => {
            fetch(`http://localhost:5500/${id}`, { mode: 'cors' })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setProject(data);
                });
        }
        getProjectFromBackEnd();     

    }, []);

    const passData = (data) => {
        const [pass] = data.filter(project => project.id === id);
        return pass;
    }


    return (
        <article>
            <Hero node={project} data={passData(data)} />
            <Article node={project} />
        </article>
    )

}
