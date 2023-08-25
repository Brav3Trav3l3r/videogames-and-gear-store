export default {
    name: 'gears',
    type: 'document',
    title: 'Gears',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        validation: Rule => Rule.required()
      },
      {
        name: 'poster',
        type: 'image',
        title: 'Poster',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'currency',
        type: 'string',
        title: 'Currency',
        initialValue: "USD"
      }
    ],
  }
  