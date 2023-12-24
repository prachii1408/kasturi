export type ItemKey='cart' | 'wishlist' |'checkout';

export interface subcat{
    title:string,
    href:string
}

export interface NavItem{
    label:string,
    href:string,
    submenu:subcat[]
}
export interface Product{
    id:string,
    name:string,
    description:string,
    slug:string,
    category?:Category,
    mainimage:string,
    gender?:Category,
    wt:number
}

export interface Category{
    id:string,
    name:string,
    image:string,
    slug:string,
    products:Product[]
}


export interface featuredItems{
 bestSellers:Product[],
 gifting:Product[],
//  topCategories:Category[],
}
export interface CustomBreadCrumbItem{
    name:string;
    link:string;
}
export interface IItem extends Product{
    count:number
}
export interface IState{
  cart:IItem[],
  wishlist:IItem[],
  checkout:IItem[]
}

export interface IContext{
    state:IState,
    addItem:(key:ItemKey,product:Product,count?:number)=>void;
    removeItem:(key:ItemKey,productId:string)=>void;
    increaseCount:(key:ItemKey,productId:string)=>void;
    decreaseCount:(key:ItemKey,productId:string)=>void;
    resetItem:(key:ItemKey)=>void;
    isAdded:(key:ItemKey,productId:string)=>boolean;

}