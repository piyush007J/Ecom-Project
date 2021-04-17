import React,{useState,useEffect} from 'react'
import { getProducts } from './helper/coreapicalls';
import "../styles.css"
import Base from "./Base"
import Card from './Card';



export default function Home(){
const [products,setproducts]=useState([])
const [error,seterror]=useState(false)

const loadAllProduct = () => {
    getProducts().then(data=> {
        if(data.error){
            seterror(data.error)
        }
        else{
            setproducts(data);
        }
    })
}
useEffect(()=>{
    loadAllProduct()
}, [])

    return(
        <Base title="Home Page" descrpition="Welcome to the Tshirt Store">
            <div className="row text-center">
                <h1 className="text-white">All of t-Shirt</h1>
                <div className="row">
                    {products.map((product,index)=>{
                        return(
                            <div key={index} className="col-4 mb-4">
                                <Card></Card>
                            </div>                        
                            )
                    })}
                </div>
            </div>
        </Base>
    );
}

