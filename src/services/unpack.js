export const unpack = (node) => {
    
    node.map((node) => ({
        id: node.id,
        title: node.properties.Name.title[0].text.content,
        multi_select: multiTags.join(', '),
        image: node?.properties?.Image?.files[0]?.file?.url,
    }));

}

