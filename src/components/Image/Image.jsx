import { createSet } from '../../services/create-set';
import LazyImage from "./lazy-image";

export const Image = ({ image, extra }) => {
    
    const caption = image.caption ? image?.caption?.[0]?.text?.content : extra; // use extra props for covers and cards if not from object
    const splitCaption = caption ? caption.split(/\s*(?:,|:)\s*/) : []; // add empty array in case there is no caption
    const [width, height, alt] = splitCaption;

    image = image.type === 'files' ? image.files[0] : image; // unpack files
    
    let src = "";
    switch (image.type) {
        case "external":
            src = image.external.url;
            break;
        case "file":
            src = image.file.url;
            break;
    }
    
    return (
        <picture>
            <LazyImage
                src={`${src}?tr=w-2`}
                width={width}
                height={height}
                alt={alt}
                srcset={image.type === "external" ? createSet(src, 100) : null}
            />
        </picture>
    )

}