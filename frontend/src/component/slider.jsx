import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";

export function SlideHome() {
    const [data, setData] = useState();
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
            let res =  await fetch('http://127.0.0.1:8000/product/')
            let datas = await res.json();
            setData(datas)
        }catch(e){
                console.log(e.message)
            }
        }
        fetchdata()
    },[])
  return (
   <>
     <div className="h-70 sm:h-64 xl:h-80 2xl:h-[700px]">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
      </Carousel>
    </div>
   </>
  );
}
