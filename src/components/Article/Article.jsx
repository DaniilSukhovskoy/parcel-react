import {createSet} from '../../services/create-set';

import '@justinribeiro/lite-youtube';
import { youtube_id } from '../../services/youtube-id';

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
                        height={item.image_height}
                        srcSet={createSet(item.image_ext, 100)}
                    />
                </picture>
                
            )   

        if (item.video)
            return (
                <lite-youtube
                    videoid={youtube_id(item.video)}
                    key={item.id}
                    params="loop=1&enablejsapi=1&modestbranding=1&rel=0"
                    nocookie
                    
                ></lite-youtube>
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
