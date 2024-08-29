import { useMemo } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import KhaltiCheckout from "khalti-web";

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

  
  let config = {
  "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a507256",
  "productIdentity": "1234567890",
  "productName": "Drogon",
  "productUrl": "http://gameofthrones.com/buy/Dragons",
  "eventHandler": {
    onSuccess (payload) {
      console.log(payload);
    },
    // onError handler is optional
    onError (error) {
      // handle errors
      console.log(error);
    }
  },
  // one can set the order of payment options and also the payment options based on the order and items in the array
  paymentPreference: [
    "MOBILE_BANKING",
    "KHALTI",
    "EBANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
// 	checkout.show({amount: 1000});
// }
  
  return (
    <div className="container mx-auto p-4 ">
        <h1 className="text-3xl text-red-600 m-10">Cart page</h1>
      <div className="flex flex-col gap-5">
        {Info}
      </div>
      <button onClick={()=> checkout.show({amount:100000})} className="py-3 px-6 bg-purple-600 hover:bg-purple-900 rounded-xl text-white" > Pay With Khalti</button>
    </div>
  );
};

export default MobileCart;