import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    const allPosts = posts.results;
    // console.log(allPosts);

    return allPosts.map((post) => {
        return getPageMetaData(post);
        // return post;
    });
};



const getPageMetaData = (post) => {

    const getTags = ((tags) => {
        const allTags = tags.map((tag) => {
            return tag.name;
        })

        return allTags;
    })

    return {
        id: post.id,
        // title: post.properties.Name.title[0],
        title: post.properties.名前.title[0].plain_text,
        description: post.properties.Description.rich_text[0].plain_text,
        // description: post.properties.Description.rich_text[0].plain_text,
        date: post.properties.Date.date.start,
        slug: post.properties.Slug.rich_text[0].plain_text,
        tags: getTags(post.properties.タグ.multi_select),
    }
}

export const getSinglePost = async (slug) => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    console.log(metadata);

    return {
        metadata,
    };

}