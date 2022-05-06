export default function Recursive({ node, data }) {
    return (
        
        <div className="project-banner">
            <div className="banner-text">
                <h2>{node.map(object => (object.h2))}</h2>
            </div>
            <div className="banner-image">
                <picture>
                    <img src={data} />
                </picture>
            </div>
        </div>
    )

}
