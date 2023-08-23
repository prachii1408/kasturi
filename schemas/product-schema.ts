export const ProductSchema={
    name:'product',
    title:"Product",
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            description:'Name of Product'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:100
            }
        },
        {
            name:'material',
            title:'Material',
            type:'string',
        },
        {
            name:'gender',
            title:'Gender',
            type:'string',
        },
        {
            name:'category',
            title:'Product Category',
            type:'reference',
            to:[{type:'category'}]
        },
        {
            name:'mainimage',
            title:'Main Image',
            type:'image',
            options:{
                hotspot:true
            }
        },
        {
            name:'gallery',
            title:'Gallery Image',
            type:'array',
            of:[{type:'galleryImage'}],
            options:{
                maxLength:3,
            }
        },
        {
            name:'subCategory',
            title:'Sub Category',
            type:'string',
        },
        {
            name:'description',
            title:'Description',
            type:'text',
        }
        
    ]

}