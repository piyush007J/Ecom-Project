import React from 'react'
import Imagehelper from './helper/Imagehelper';

    const Card = (
      {product,  addtoCart=true,
        removeFromCart=false
      }
    ) => {

      const showAddtoCart =(addtoCart) => {
        return(
          addtoCart && (
            <button
                    onClick={() => {}}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                  >
                    Add to Cart
                  </button>
          )
        )
      }

      
      const showRemovefromCart =(removeFromCart) => {
        return removeFromCart && (
          <button
                    onClick={() => {}}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                  >
                    Remove from cart
                  </button>
        )
      }
        return (
          <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">A photo from pexels</div>
            <div className="card-body">
              <div className="rounded border border-success p-2">
                <Imagehelper product={product}/>
              </div>
              <p className="lead bg-success font-weight-normal text-wrap">
                this photo looks great
              </p>
              <p className="btn btn-success rounded  btn-sm px-4">$ 5</p>
              <div className="row">
                <div className="col-12">
                  {showAddtoCart(addtoCart)}
                </div>
                <div className="col-12">
                  {showRemovefromCart(removeFromCart)}
                </div>
              </div>
            </div>
          </div>
        );
      };
    



export default Card;