import { CustomBreadCrumbItem, IItem, NavItem } from "./model";

export const navItems:NavItem[]=[
    {
        label:'GOLD',
        href:'/gold',
        submenu:[
          {
            title:'Bracelets',
            href:'/bracelets'
          },
          {
            title:'Chain',
            href:'/chain'
          },
          {
            title:'Mangalsutra',
            href:'/mangalsutra'
          }
        ]
         
    },
    {
        label:'SILVER',
        href:'/silver',
        submenu:[
          {
            title:'Chain',
            href:'/chain'
          },
          {
            title:'Bracelets',
            href:'/bracelets'
          },
          {
            title:'Mangalsutra',
            href:'/mangalsutra'
          },
        
        ]
    },
    {
        label:'DIAMOND',
        href:'/diamond',
        submenu:[
          {
            title:'Chain',
            href:'/chain'
          },
          {
            title:'Bracelets',
            href:'/bracelets'
          },
          {
            title:'Mangalsutra',
            href:'/mangalsutra'
          },
          
        ]
    },
    // {
    //     label:'FRANCHISE',
    //     href:'/franchise',
    //     submenu:[
    //       {
    //         title:'Mangalsutra',
    //         href:'/mangalsutra'
    //       },
    //       {
    //         title:'Bracelets',
    //         href:'/bracelets'
    //       },
    //       {
    //         title:'Chain',
    //         href:'/chain'
    //       },
         
    //     ]
    // },
    // {
    //     label:'CONTACT',
    //     href:'#footer',
    //     submenu:[
    //       {
    //         title:'phone',
    //         href:'/bracelets'
    //       },
    //       {
    //         title:'Bracelets',
    //         href:'/bracelets'
    //       },
    //       {
    //         title:'Bracelets',
    //         href:'/bracelets'
    //       },
    //       {
    //         title:'Bracelets',
    //         href:'/bracelets'
    //       },
    //       {
    //         title:'Bracelets',
    //         href:'/bracelets'
    //       }
    //     ]
    // },
]

export const getSubstring=(text:string,substringEnd:number):string=>{
    return text.length>substringEnd ? `${text.substring(0,substringEnd)}...`:text;
}

export const defaultBreadCrumbItems:CustomBreadCrumbItem[]=[
    {
      name:"Home",
      link:"/"
    },
    // {
    //   name:"Categories",
    //   link:"/"
    // },
  
  ];

  export const calculateItemsTotal = (items: IItem[]): number => {
    return items
      .map((item) => ({count: item.count }))
      .reduce(
        (previousValue, currentValue) =>
          previousValue +  currentValue.count,
        0
      );
  };
  