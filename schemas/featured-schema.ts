export const FeaturedSchema={
    name:"featuredProducts",
    title:'Featured',
    type:'document',
    fields:[
        {
            name:'bestSellers',
            title:'Best Sellers',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'product'}]
                }
            ]
        },
        {
            name:'gifting',
            title:'Gifting Range',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'product'}]
                }
            ]
        }
       
    ]
}