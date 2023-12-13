export default {
    name: 'tutorials',
    type: 'document',
    title: 'Tutorials',   //Document
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
        name: 'views',
        type: 'string',
        title: 'Views',
      },
      {
        name: 'comments',
        type: 'number',
        title: 'Comments',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        Options:{
            hotspot: true,
        },
      },
      
    ],
  }