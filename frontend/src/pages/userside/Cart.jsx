import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import KhaltiCheckout from "khalti-web";

const MobileCart = () => {
//     let config = {
//   "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a507256",
//   "productIdentity": "1234567890",
//   "productName": "Drogon",
//   "productUrl": "http://gameofthrones.com/buy/Dragons",
//   "eventHandler": {
//     onSuccess (payload) {
//       // hit merchant api for initiating verfication
//       console.log(payload);
//     },
//     // onError handler is optional
//     onError (error) {
//       // handle errors
//       console.log(error);
//     }
//   },
//   // one can set the order of payment options and also the payment options based on the order and items in the array
//   paymentPreference: [
//     "MOBILE_BANKING",
//     "KHALTI",
//     "EBANKING",
//     "CONNECT_IPS",
//     "SCT",
//   ],
// };

// let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
// 	checkout.show({amount: 1000});
// }

  return (
    <section className="container mx-auto my-3 flex w-full flex-col gap-3 px-4 ">
      {/* Mobile cart table */}
      
          <div  className="flex w-full border px-4 py-4">
            <img
              className="self-start object-contain"
              width="90px"
              src='https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
              alt="bedroom image"
            />
            <div className="ml-3 flex w-full flex-col justify-center">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Product bag 1</p>
              </div>
              {/* Additional code for size and price remains unchanged */}
              <p className="py-3 text-xl font-bold text-violet-900">
                400 Npr
              </p>
              <div className="mt-2 flex w-full items-center justify-between">
                <div className="flex items-center justify-center">
                  <button
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                    // onClick={() => updateQuantity(index, quantities[index] - 1)}
                  >
                    −
                  </button>
                  <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        2
                  </div>
                  <button
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                    // onClick={() => updateQuantity(index, quantities[index] + 1)}
                  >
                    +
                  </button>
                </div>
                <FaTrashAlt
                //   onClick={() => removeItem(index)}
                  className="m-0 h-5 w-5 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <Link className='px-5 py-3 bg-purple-500 text-white w-40 rounded-xl hover:bg-purple-800' 
        //   id='payment-button'
          >Pay With Khalti</Link>
        
    </section>
  );
};

export default MobileCart;
