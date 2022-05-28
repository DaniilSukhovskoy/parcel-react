const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');


const express = require('express');
const favicon = require('serve-favicon')
var path = require('path')
const PORT = process.env.PORT || 5500;
const app = express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
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
            cover: page?.cover,
            cover_info: page.properties.Image_info?.rich_text[0]?.text?.content,
            type: page.properties.Type.select.name,
            image: page.properties.Image,
            image_info: page.properties.Image_info?.rich_text[0]?.text?.content,
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
// async function getProject(id) {
//     const { results } = await notion.blocks.children.list({
//         block_id: id,
//     });

//     const expandedResults = [];

//     for (let block of results) {
//         if (block.has_children) {
//             block[block.type].children = await getProject(block.id);
//         }

//         expandedResults.push(block);
//     }


//     return expandedResults
// }

// test
async function readBlocks(id) {

    try {
        const { results } = await notion.blocks.children.list({
            block_id: id,
        });

        const childRequests = results.map(async (block) => {
            const children = []

            if (block.has_children) {
                block[block.type].children = await readBlocks(block.id);
                test.push(block)
                return { ...block, children };
            }

            return block;
        });

        const expandedResults = await Promise.all(childRequests);

        return expandedResults;

    } catch (error) {
        console.log('error!');
        console.error(error.body);
    }
}



app.get('/:id', async (req, res) => {
    const works = await readBlocks(req.params.id);
    res.set('Access-Control-Allow-Origin', 'https://localhost:1234');
    res.json(works);
})