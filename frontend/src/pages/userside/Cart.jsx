import { useMemo } from "react";
import { useSelector } from "react-redux";

const MobileCart = () => {
 const post = useSelector(state => state.cart);
  const Info = useMemo(()=>{
    return post.map(posts => (
          <div key={posts.id} className="flex shadow-md rounded-2xl p-4 justify-evenly items-stretch">
            <img src={posts.image} className="w-[250px] h-[250px] object-contain rounded-t-2xl" alt={posts.title} />
            <div className="w-1/3 p-4">
              <h1 className="font-extrabold text-3xl text-red-600 my-3">{posts.title}</h1>
            </div>
            <h1 className="my-2">
                Price{" "}
                <span className="font-bold text-xl text-red-600">${posts.price}</span>
              </h1>
          </div>
        ))
  },[post])
  
  return (
    <div className="container mx-auto p-4 ">
        <h1 className="text-3xl text-red-600 m-10">Cart page</h1>
      <div className="flex flex-col gap-5">
        {Info}
      </div>
    </div>
  );
};

export default MobileCart;