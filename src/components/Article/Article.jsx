export default function Article({ node }) {

    const renderElement = (item) => {
        if (item.h3)
            return (
                <h3 className="grid-col-span-2" key={item.id}>{item.h3}</h3>
            )

        if (item.paragraph)
            return (
                <p key={item.id}>{item.paragraph}</p>
            )

        if (item.image)
            return (
                <picture key={item.id}>
                    <img
                        src={item.image}
                        alt={item.image_alt}
                        width={item.image_width}
                        height={item.image_height}/>
                </picture>
            )

        if (item.image_ext)
            return (
                <picture key={item.id}>
                    <img
                        src={item.image_ext}
                        alt={item.image_alt}
                        width={item.image_width}
                        height={item.image_height}/>
                </picture>
            )   

        if (item.video)
            return (
                <div className="iframe-responsive" key={item.id}>
                    <iframe
                    src={item.video}
                    frameBorder="0"
                />
                </div>
            )
            
        return null;

        {/* {item.has_children && <Section node={item.children}/>} */ }
    }

    return (
        <div className="project container extra-margin project-grid">
            {node.map(item => (renderElement(item)))}
        </div>
    )

}
