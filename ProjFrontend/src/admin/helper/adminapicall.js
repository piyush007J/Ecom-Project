import {API} from "../../backend"

export const createCategory =(userId , token , category) =>
{
    return fetch(`http://localhost:8000/api/category/create/${userId}`,{
        method:'POST',
        headers:{
        Accept:"application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${token}`
    },
    body:JSON.stringify(category)
    })
    .then(resp => {
        return resp.json()
    })
    .catch(err => console.log(err))
    
};
//get all category

export const getCategories = () =>{
    return fetch(`${API}/categories`,{
        method:"GET",
    }).then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}


//product call
export const createaProduct=(userId,token,product)=>
{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",

    },
    body:product
}).then(response => {
    return response.json()
})
.catch(err => console.log(err))
}


//get all products
export const getProducts = () =>{
    return fetch(`${API}/products`,{
        method:"GET",
    }).then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
}

//delete product
export const deleteaProduct=(productID,userId,token)=>
{
    return fetch(`${API}/product/${productID}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
        Authorization : `Bearer ${token}`
},
}).then(response => {
    return response.json()
})
.catch(err => console.log(err))
}







//get a product
export const getProduct = productID  => {
    return fetch(`${API}/product/${productID}`,{
        method:"GET"
    }).then(resp => {
        return resp.json()
    })
    .catch(err => console.log(err))
}





//update a product
export const updateaProduct=(productID,userId,token,product)=>
{
    return fetch(`${API}/product/${productID}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",

    },
    body:product
}).then(response => {
    return response.json()
})
.catch(err => console.log(err))
}




