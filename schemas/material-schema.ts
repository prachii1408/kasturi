export const MaterialSchema={
    name:"material",
    title:"Material",
    type:"document",
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            description:'Name of material'
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
       
    ]
}