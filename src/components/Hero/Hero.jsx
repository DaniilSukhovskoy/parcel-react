export default function Recursive({ node, data }) {

    return (
        <div className="project-banner">

            <div className="banner-text">
                <h2>{node.map(object => (object.heading_2 && object.heading_2.rich_text[0].text.content))}</h2>
            </div>
            <div className="banner-image">
                <picture>
                    <img src={data.data.map(c => (c?.cover?.file.url))} />
                </picture>
            </div>
        </div>
    )

}
