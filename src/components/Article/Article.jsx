import '@justinribeiro/lite-youtube';
import { youtube_id } from '../../services/youtube-id';

import { Text } from '../Text/Text';
import { Image } from '../Image/Image';

export default function Article({ node }) {
    const renderElement = (item) => {
        if (item.h3)
            return (
                
                <h3 className="grid-col-span-2" key={item.id}>
                    <Text text={item.h3} id={item.id}/>
                </h3>
            )

        if (item.paragraph)
            return (
                <p key={item.id}>
                    <Text text={item.paragraph} id={item.id}/>
                </p>
            )

        if (item.image)
            return (
                <Image key={item.id} image={item.image}/>
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
        <div className="container project-grid">
            {node.map(item => (renderElement(item)))}
        </div>
    )

}

