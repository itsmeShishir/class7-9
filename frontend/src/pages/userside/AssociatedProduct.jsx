import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AssociatedProduct = () => {
const {id} = useParams();
const [data, SetData] = useState(null);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
            let res =  await fetch(`http://127.0.0.1:8000/category/product/${id}`)
            let data = await res.json();
            SetData(data)
            }catch(e){
                console.log(e.message)
            }
        }
        fetchdata()
    },[id])
  return (
    <>
    {
        data && (
            <>
                <h1 className="container mx-auto text-red-500 text-3xl py-4 my-4">{data.title}</h1>
                <div className="container mx-auto grid gap-7 md:grid-cols-4">
                      {
            data.product.map((items) =>(
       <div key={items.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <Link to={`/single/${items.id}`}>
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
    <img
      src={items.img}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {items.title}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {items.price} Rs
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {items.description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      type="button">
      Add to Cart
    </button>
  </div>
        </Link>
</div>
 ))
        }
                </div>
        </>
        )
    }
    </>
  )
}

export default AssociatedProduct
