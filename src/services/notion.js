const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');


const express = require('express');
const PORT = process.env.PORT || 5500;
const app = express()

app.listen(PORT, console.log(`Server started on port ${PORT}`));


// Init client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

// All projects
const getWorks = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        sorts: [
            {
                property: "Name",
                direction: "ascending",
            }
        ],

    });


    const works = response.results.map((page) => {
        return {
            id: page.id,
            cover: page?.cover?.file.url, // replace with props later
            type: page.properties.Type.select.name,
            image: page.properties.Image.files[0].file.url,
            title: page.properties.Name.title[0].plain_text,
            tags: page.properties.Tags.multi_select.map(select => (select.name)).join(', '),
        }
    });

    return works;

};


app.get('/', async (req, res) => {
    const works = await getWorks();
    res.set('Access-Control-Allow-Origin', 'https://localhost:1234');
    res.json(works);
})


// Project
async function getProject(id) {
    const blockId = id;
    const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
    });

    const project = response.results.map((blocks) => {
        // slice caption
        const image_caption = blocks?.image?.caption[0]?.text.content.split(/\s*(?:,|x)\s*/);

        return {
            id: blocks.id,
            children: blocks.has_children,
            type: blocks.type,
            h2: blocks?.heading_2?.rich_text[0]?.text?.content,
            h3: blocks?.heading_3?.rich_text[0]?.text?.content,
            h4: blocks?.heading_4?.rich_text[0]?.text?.content,
            paragraph: blocks?.paragraph?.rich_text[0]?.text?.content,
            image: blocks?.image?.file.url,
            video: blocks?.video?.external.url,
            // experimental
            image_width: image_caption?.[0],
            image_height: image_caption?.[1],
            image_alt: image_caption?.[2],
        }
    });

    return project;
    
};

app.get('/:id', async (req, res) => {
    const works = await getProject(req.params.id);
    res.set('Access-Control-Allow-Origin', 'https://localhost:1234');
    res.json(works);
})