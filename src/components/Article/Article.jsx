export default function Article({ node }) {

    const renderElement = (item) => {
        if (item.heading_3)
            return (
                <h3 className="grid-col-span-2" key={item.id}>{item.heading_3?.rich_text[0]?.text.content}</h3>
            )

        if (item.paragraph)
            return (
                <p key={item.id}>{item.paragraph?.rich_text[0]?.text?.content}</p>
            )

        if (item.image)
            return (
                <picture key={item.id}>
                    <img src={item.image.file.url} alt="" />
                </picture>
            )

        // if (item.video)
        //     return (
        //         <div className="iframe-responsive" key={item.id}>
        //             <iframe
        //             src={item.video.external.url}
        //             frameBorder="0"
        //         />
        //         </div>
        //     )
            
        return null;

        {/* {item.has_children && <Section node={item.children}/>} */ }
    }

    return (
        <div className="project container extra-margin project-grid">
            {node.map(item => (renderElement(item)))}
        </div>
    )

}
