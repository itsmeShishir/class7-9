
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  let email = localStorage.getItem('email');
  let username = localStorage.getItem('username')
  let role = localStorage.getItem('role')
  

  const signout = () =>{
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('email');
    navigate("/")

    
  }
  return (
    <Navbar fluid rounded className="container mx-auto">
      <Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Hamro Ecommerce</span>
      </Link>
      <div className="flex md:order-2">
      
        { username ?  (
          <>
              <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{username}</span>
            <span className="block truncate text-sm font-medium">{email}</span>
          </Dropdown.Header>
          {role=='admin' ? (<Dropdown.Item><Link to="/admin">Dashboard</Link></Dropdown.Item>): ""}
          <Dropdown.Item>Change Password</Dropdown.Item>
          <Dropdown.Item><Link to="/cart">Cart</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={signout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
          </>
        ) : (
          <>
          <div className="flex gap-5">
          <Link to="/login" className="px-4 py-2 bg-blue-500 rounded-xl">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-red-500 rounded-xl">Register</Link>
        </div></>
        )}
        
      </div>

     
      <Navbar.Collapse>
        <Link to="/" active>
          Home
        </Link>
        <Link to="/category">Category</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
