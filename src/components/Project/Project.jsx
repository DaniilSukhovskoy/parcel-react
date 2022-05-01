import test from '../../../dist/work.json';
import Hero from "../Hero/Hero";
import { useParams } from "react-router-dom";
import Article from "../Article/Article";


export default function Project(data) {
    let { id } = useParams();

    return(
        <article>
            <Hero node={test} data={data}/>
            <Article node={test} />
        </article>
    )
        
}
