const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export const getProjects = async (req, res) => {
  try {
    const data = []
    const response = await notion.databases.query({ database_id: process.env.NOTION_PROJECTS_DATABASE_ID });
    if (response?.results?.length) {
      const data = response.results.map((page) => {
        return {
          description: page.properties.description.rich_text[0].plain_text,
          image: page.properties.image.url,
          tags: page.properties.tags.multi_select.map((tag) => tag.name),
          live_link: page.properties.live_link.url,
          id: page.properties.id.number,
          source_code: page.properties.source_code.url,
          name: page.properties.name.title[0].plain_text,
        };
      });
      return data
    }
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async (req, res) => {
  try {
    const projects = await getProjects(req, res);
    if (projects === null) {
      res.status(500).json({ msg: 'Failed', error: 'Error retrieving data from Notion API' });
      return;
    }
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed', error });
  }
};

