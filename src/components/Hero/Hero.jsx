import { Image } from '../Image/Image';

export default function Recursive({ node, data }) {
    return (
        <div className="project-banner">
            {console.log(data)}
            <div className="banner-text">
                <h2>{node.map(object => (object.h2))}</h2>
            </div>
            <div className="banner-image">
                {data && <Image image={data?.cover} extra={data?.cover_info}/>}
            </div>
        </div>
    )

}
