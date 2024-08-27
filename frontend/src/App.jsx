import { Routes, Route } from "react-router-dom"
import Home from "./pages/userside/home"
import Category from "./pages/userside/category"
import Product from "./pages/userside/product"
import About from "./pages/userside/about"
import Contact from "./pages/userside/contact"
import Login from "./pages/userside/login"
import Register from "./pages/userside/regiser"
import ErrorPage from "./pages/userside/error"
import Single from "./pages/userside/Single"
import MainPage from "./pages/mainPage";
import AssociatedProduct from "./pages/userside/AssociatedProduct"
import Dashboard from "./pages/adminsite/dashboard"
import ContactAdmin from "./pages/adminsite/contact/contactAdmin"
import EditContact from "./pages/adminsite/contact/EditContact"
import MainBody from "./pages/adminsite/mainBody/MainBody"
import ProductAdmin from "./pages/adminsite/product/productAdmin"
import CategoryAdmin from "./pages/adminsite/category/categoryAdmin"
import AddCategory from "./pages/adminsite/category/addCategory"
import AddProduct from "./pages/adminsite/product/addProduct"
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./pages/PrivateRoute"
function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<MainPage />} >
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="single/:id" element={<Single />} />
        <Route path="category/:id" element={<AssociatedProduct />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
          <Route path="/admin/*" element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path="allCategory" element={<CategoryAdmin />}/>
          <Route path="addCategory" element={<AddCategory />}/>
          <Route path="allProduct" element={<ProductAdmin />}/>
          <Route path="addProduct" element={<AddProduct />}/>
          <Route path="allContact" element={<ContactAdmin />} />
          <Route path="editContact/:id" element={<EditContact />}></Route>
        </Route>
        <Route path="/user/*" element={<PrivateRoute allowedRoles={['user']} />}>
          <Route index element={"User Profile"} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
