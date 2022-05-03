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
        return page;
    });

    return works;

};

// (async () => {
//     const works = await getWorks()
//     console.log(works)
// })()


app.get('/works', async (req, res) => {
    const works = await getWorks();
    res.json(works);
})