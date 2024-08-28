import { useState, useEffect } from "react"
import { Carousel } from "flowbite-react";

export function SlideHome() {
  const [data, SetData] = useState([]);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
            let res =  await fetch('http://127.0.0.1:8000/product/')
            let datas = await res.json();
            SetData(datas)
            }catch(e){
                console.log(e.message)
            }
        }
        fetchdata()
    },[])
    // console.log(data[].is_slider);

    let mainData = data.filter(data => data.is_slider == true  );
    console.log(mainData)
  return (
   
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[700px]">
       <Carousel >
      { mainData.map(items => 
        <img key={items.id} src={items.img} alt="..." />
      )}
      </Carousel>
    </div>
  );
}
