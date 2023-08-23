export const GalleryImageSchema={
    name:'galleryImage',
    title:'Gallery Image',
    type:'image',
    fields:[
       {
        name:'caption',
        title:'Caption',
        type:'string',
        options:{
           isHighlight:true
        }
       }
    ],
    options:{
        hotspot:true
    },
}