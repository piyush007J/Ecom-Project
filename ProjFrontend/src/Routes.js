import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from "./core/Home"
import Signup from './user/Signup'
import Signin from './user/Signin'
import AdminRoute   from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoute"
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard"
import AddCategory from "./admin/AddCategory"
import manageCategories from './admin/manageCategory'
import AddProduct from './admin/AddProduct'



const Routes=()=>{
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
                <AdminRoute path="/admin/categories" exact component={manageCategories}/>
                <AdminRoute path="/admin/create/product" exact component={AddProduct}></AdminRoute>                
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;