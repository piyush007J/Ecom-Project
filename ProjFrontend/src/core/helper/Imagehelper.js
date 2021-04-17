import React from 'react'
import { API } from '../../backend'

const Imagehelper =({product
})=>
{
    const imageurl= product ? 
    `${API}/product/photo/${product._id}`
    : "https://images-na.ssl-images-amazon.com/images/I/41tGwZ5USVL.jpg"
    return(
        <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    
    )
}
export default Imagehelper