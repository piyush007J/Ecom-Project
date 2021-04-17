import React ,{useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper/index";

const Signup =( ) => {

    const [values,setValue]= useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success: false
    });
    const {name,email,password,success,error} = values;
//Higher order function
    const handleChange = name => event => {
        setValue({...values,error:false,[name]: event.target.value});
    };


    

    const onSubmit = event => {
        console.log("inside ONsubmit method in signup.js")
        event.preventDefault();
        setValue({...values,error:false});
        signup({name,email,password})
        .then(data=>{
            if(data.error){
                setValue({...values,error:data.error,success:false})
            }else{
                setValue({...values,
                name:"",
                email:"",
                password:"",
                error:"",
                success:true
                })
            }

        })
        .catch(console.log("Error in signup"))
    }

    const successMessage = () => {
        return(<div className="alert alert-success"
        style={{display: success ? "" : "none"}}>
            New account created Succesfully.Please <Link to="/signin">Login here</Link>
        </div>)
    };

    const errorMessage = () => {
        return(<div
        className="alert alert-danger"
        style={{display: error ? "" : "none"}}>
        {error}

        </div>)
    }

    const signUpForm=() =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 test-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" onChange={handleChange("name")} type="text"/>
                        </div>
                        
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" onChange={handleChange("email")} type="email"/>
                        </div>

                        
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" onChange={handleChange("password")} type="password"/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title="Signup Page" descrpition="A Page to sign up">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
    <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
       
    )
}


export default Signup;