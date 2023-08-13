import {baseURL} from "./base_url"

export const cheeseLoader= async()=>{
    const response = await fetch(`${baseURL}`)
    const allCheese= await response.json()
    return allCheese
}

export const oneCheeseLoader = async({params})=>{
    const id = params.id
    const response = await fetch(`${baseURL}/${id}`)
    const individualCheese = await response.json()
    return individualCheese
}   