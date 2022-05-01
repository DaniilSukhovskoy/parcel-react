const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const fs = require('fs');

// Init client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});


const getWorks = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        // filter: {
        //     property: "Type",
        //     select: {
        //         equals: "Work",
        //     }
        // },
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




// pages
const getWork = async () => {
    const blockId = '27c730a8-59cd-4af5-b620-d28035c0909a';
    const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
    });

    const work = response.results.map((blocks) => {
        return blocks;
    });

    return work;
};

// to json
;(async () => {
    const works = await getWorks();
    const work = await getWork();

    const saveData = (data, file) => {
        const finished = (error) => {
            if(error){
                console.error(error)
                return;
            }
            console.log(`JSON ${file} is saved.`);
        }

        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFile(file,jsonData,finished);

    }

    saveData(works, './dist/works.json');
    saveData(work, './dist/work.json');
})()