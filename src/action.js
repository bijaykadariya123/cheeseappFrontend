import { baseURL } from "./base_url";
import { redirect } from "react-router-dom";

export const creatAction = async ({request})=>{
    const formData = await request.formData()
    const newCheese = {
        // name: 'American Cheese', countryOfOrigin: 'Switzerland', image:
        name: formData.get('name'),
        countryOfOrigin:formData.get("countryOfOrigin"),
        image:formData.get('image')
    } 

    await fetch(`${baseURL}`,
     {method:"post",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newCheese)
    
    })
    return redirect('/')
}

export const updateAction = async ({request, params})=>{

    const id = params.id
    const formData = await request.formData()
    const updatedCheese= {
        name: formData.get('name'),
        countryOfOrigin:formData.get("countryOfOrigin"),
        image:formData.get('image')
    }
    await fetch(`${baseURL}/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(updatedCheese)
    })
    return redirect(`/${id}`)
}

export const deleteAction = async ({params})=>{
    const id = params.id
    await fetch (`${baseURL}/${id}`,{
        method:'DELETE'
    })
    return redirect('/')
}