const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

const fs = require('fs');

// Init client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});


const getWork = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "Type",
            select: {
                equals: "Work",
            }
        },
        sorts: [
            {
                property: "Name",
                direction: "ascending",
            }
        ],

    });


    const works = response.results.map((page) => {
        // console.log(page);
        let multiTags = page.properties.Tags.multi_select.map((element) => {
            return element.name
        });

        return {
            id: page.id,
            title: page.properties.Name.title[0].text.content,
            multi_select: multiTags.join(', '),
            image: page?.properties?.Image?.files[0]?.file?.url,
            featured: page.properties.Featured.checkbox,

        };
        
    });

    return works;

};

;(async () => {
    const test = await getWork();
    // console.log(test);

    const data = JSON.stringify(test);
    try {
        fs.writeFileSync('./dist/data.json', data);
        console.log("JSON data is saved.");
    } catch (error) {
        console.error(err);
    }
})()


// export default getWork;