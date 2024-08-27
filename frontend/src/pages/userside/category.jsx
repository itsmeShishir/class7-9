import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
const Category = () => {
  const[data, SetData] = useState([]);
  useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const res = await fetch("http://127.0.0.1:8000/category/");
        const data = await res.json();
        SetData(data)
      }catch(e){
        console.log(e.message)
      }
    }
    fetchdata()
  },[])
  return (
    <>
    <h2 className="container mx-auto text-center text-3xl m-4 p-5 text-red-400">Category</h2>
    <div className="container mx-auto grid gap-7 md:grid-cols-3 ">

            {
              data.map(items =>(
                <div key={items.id}
  className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div 
    className='absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none' style={{backgroundImage : `url(${items.img})`}}>
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <Link to={`${items.id}`} className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      {items.title}
    </Link>
    <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      {items.username}
    </h5>w
  </div>
  
</div>
              ))
            }
      

    </div>
    </>
  )
}

export default Category