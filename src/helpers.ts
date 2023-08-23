import { CustomBreadCrumbItem, IItem, NavItem } from "./model";

export const navItems:NavItem[]=[
    {
        label:'GOLD',
        href:'/gold'
    },
    {
        label:'STIRLING SILVER',
        href:'/stirling-silver'
    },
    {
        label:'DIAMOND',
        href:'/diamond'
    },
    {
        label:'FRANCHISE',
        href:'/franchise'
    },
    {
        label:'CONTACT',
        href:'/contact'
    },
]

export const getSubstring=(text:string,substringEnd:number):string=>{
    return text.length>substringEnd ? `${text.substring(0,substringEnd)}...`:text;
}

export const defaultBreadCrumbItems:CustomBreadCrumbItem[]=[
    {
      name:"Products",
      link:"/products"
    },
    {
      name:"Categories",
      link:"/categories"
    },
  
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
  