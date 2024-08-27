import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const Single = () => {
    const {id} = useParams();
    const [singledata, Setsingeldata] = useState({});

    useEffect(()=>{
        const fetchdata = async()=>{
            try{
            let res =  await fetch(`http://127.0.0.1:8000/singleProduct/${id}`)
            let datas = await res.json();
            Setsingeldata(datas)
            console.log(datas)
            }catch(e){
                console.log(e.message)
            }
        }
        fetchdata()
    },[])
  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={singledata.img} alt={singledata.title} />
                </div>
                
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{singledata.title}</h2>
                 <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">{singledata.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div>

                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                       {singledata.description}
                    </p>
                </div>
                <div className="flex m-2 m-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Single
