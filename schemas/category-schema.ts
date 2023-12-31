export const CategorySchema={
    name:'category',
    title:"Category",
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            description:'Name of Category'
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
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        },
        {
            name:'products',
            title:'Products',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'product'}]
                }
            ]
        },
        {
            name:'subcategory',
            title:'Sub Categories',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'subcategory'}]
                }
            ]
        },
       
    ]

}