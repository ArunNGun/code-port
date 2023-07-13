const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_API_TOKEN,
});

export default async (req, res) => {
    try {
        // temporary
        let ip = 'NA'
        const date = new Date();
        const formattedDate = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear().toString().substr(-2) + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);

        await fetch("https://www.cloudflare.com/cdn-cgi/trace")
            .then((response) => response.text())
            .then((two) => {
                var data = two.replace(/[\r\n]+/g, '","').replace(/\=+/g, '":"');
                data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
                var locale = JSON.parse(data);
                ip = locale.ip || "NAA"
            });
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DOWNLOADS_DATABASE_ID,
            },
            properties: {
                ip: {
                    title: [
                        {
                            text: {
                                content: ip,
                            },
                        },
                    ],
                },
                datetime: {
                    rich_text: [
                        {
                            text: {
                                content: formattedDate,
                            },
                        },
                    ],
                },
            },
        });
        res.status(201).json({ msg: 'Success' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Failed', error });
    }
};
