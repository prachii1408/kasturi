export type ItemKey='cart' | 'wishlist' |'checkout';

export interface NavItem{
    label:string,
    href:string
}
export interface Product{
    id:string,
    name:string,
    description:string,
    slug:string,
    category?:Category,
    mainImg:string
}

export interface Category{
    id:string,
    name:string,
    image:string,
    slug:string
}
export interface featuredItems{
 topSellers:Product[],
 giftingRange:Product[],
 topCategories:Category[],
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