'use client'
import { IContext, IState, ItemKey, Product } from '@/model'
import { useLocalStorage } from '@mantine/hooks';
import React,{ReactNode, useState,createContext } from 'react'

export const AppContext=createContext<IContext> (null as any);
interface IAppContextProviderProps{
    children:ReactNode
}
const initialState:IState={
    cart:[],
    wishlist:[],
    checkout:[],
}

export const AppContextProvider = ({children}:IAppContextProviderProps) => {
    const [state,setState]=useLocalStorage <IState>({key:'Kasturi Jewellers',defaultValue:initialState});
    const addItem=(key:ItemKey,product:Product,count?:number)=>{
        setState((prevState)=>({
            ...prevState,
            [key]:[...prevState[key],{...product,count:count || 1}]
        }))
    }
    const removeItem=(key:ItemKey,productId:string)=>{
        setState((prevState)=>({
            ...prevState,
            [key]:prevState[key].filter((item)=>item.id!==productId)
        }))
    }
    const increaseCount=(key:ItemKey,productId:string)=>{
        const items=[...state[key]];
        const index=items.findIndex(item=>item.id===productId);
        if(index!==-1){
         items[index].count+=1;
         setState((prevState)=>({...prevState,[key]:items}));
        }
    }
    const decreaseCount=(key:ItemKey,productId:string)=>{
        const items=[...state[key]];
        const index=items.findIndex(item=>item.id===productId);
        if(index!==-1 && items[index].count>1 ){
            items[index].count-=1;
            setState((prevState)=>({...prevState,[key]:items}));
            }
        }
    
    const resetItem=(key:ItemKey)=>{
        setState((prevState)=>({...prevState,[key]:[]}))
    }
    const isAdded=(key:ItemKey,productId:string):boolean=>{
         return state[key].some(item=>item.id===productId)
    }
  return (
    <AppContext.Provider value={{state,addItem,removeItem,increaseCount,decreaseCount,resetItem,isAdded}}>
      {children}
    </AppContext.Provider>
  )
}


