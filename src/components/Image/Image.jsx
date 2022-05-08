import { createSet } from '../../services/create-set';

export const Image = ({ image, extra }) => {
    
    const caption = image.caption ? image?.caption?.[0]?.text?.content : extra; // use extra props for covers and cards if not from object
    const split = caption?.split(/\s*(?:,|x)\s*/);

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
            <img
                src={src}
                width={split?.[0]}
                height={split?.[1]}
                alt={split?.[2]}
                srcSet={image.type === "external" ? createSet(src, 100) : null}
            />
        </picture>
    )

}