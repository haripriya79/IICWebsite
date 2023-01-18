import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

import Home from "./user/home";

import PageNotFound from "./core/pageNotFound";
import { PageLoder } from "./core/utils";
import UserRoutes from "./user/userRoutes";

const AdminRoutes = lazy(() => import('./admin/adminRoutes'));

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin/*" element={ <Suspense fallback={<PageLoder></PageLoder>}>
        <AdminRoutes />
      </Suspense>}>   
        
        </Route>
   

        <Route path="/*" exact  element={ <Suspense fallback={<PageLoder></PageLoder>}>
        <UserRoutes /> </Suspense>} />
        {/* <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
