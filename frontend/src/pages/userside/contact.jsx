import {useState} from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const [data, SetData] = useState(
    {
      firstName:"",
      lastName :"",
      email : "",
      phone:""  ,
      description : ""  
    }
  )

  function handleChange(event){
    const {name , value} = event.target;
    SetData((items)=>(
     {
       ...items,
      [name] : value,
     }
    ))
  }

    const onSubmit = async(e) => {
      e.preventDefault();
      try {
      await axios.post('http://127.0.0.1:8000/contact/', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        description: data.description,
      });
      toast("Successfully send")
      navigate("/")
      
    } catch (err) {
      toast("cannot send ")
    }
  };

  
  return (

    <>
      <h1>Contact Us</h1>
      <form  onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstname">FirstName</label>
          <input type="text" name="firstName" value={data.firstName} onChange={handleChange} placeholder="John" required/>
        </div>
        <div>
          <label htmlFor="lastName">LastName</label>
          <input type="text" name="lastName" value={data.lastName} onChange={handleChange} placeholder="Doe" required/>  
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="johndoe@gmail.com" required/>  
        </div>
         <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" name="phone" value={data.phone} onChange={handleChange} placeholder="9867676676" required/>  
        </div>
        <div>
          <label htmlFor="description">Description </label>
          <textarea name="description" placeholder="" rows={3} value={data.description} onChange={handleChange} required/>  
        </div>

        <button type="submit">Submit</button>
      </form>
    
    </>
  )
}

export default Contact