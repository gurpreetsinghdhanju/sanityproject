export default {
    name: 'blogs',
    type: 'document',
    title: 'Blogs',   //Document
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            title: 'Blog Description',
            name: 'blogdescriptioin',
            type: 'array',
            of: [{ type: 'block' }]
        },
    ],
}