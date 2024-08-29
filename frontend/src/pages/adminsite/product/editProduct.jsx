import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [data, setData] = useState({
    title: "",
    Brand: "",
    category: "",
    price: "",
    is_slider: "false",
    is_featured: "false",
    img: null,
    user: "",
    description: ""
  });

  const { id } = useParams(); 
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/singleProduct/${id}`);
        setData(response.data);
      } catch (err) {
       toast("Error fetching product data", err.message);
      }
    };

    fetchProduct();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "img") {
      setData((items) => ({
        ...items,
        img: event.target.files[0],
      }));
    } else {
      setData((items) => ({
        ...items,
        [name]: value,
      }));
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("img", data.img);
    formData.append("Brand", data.Brand);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("user", data.user);
    formData.append("is_slider", data.is_slider);
    formData.append("is_featured", data.is_featured);

    try {
      await axios.put(`http://127.0.0.1:8000/updateDelete/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast("Product updated successfully");
      navigate("/products"); 
    } catch (err) {
      toast("Product update failed", err.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
          <div>
            <label className="mb-2 text-lg block">Title</label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-lg block">Description</label>
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div className="font-[sans-serif] max-w-md mx-auto">
            <label className="text-base text-gray-500 font-semibold mb-2 block">Upload file</label>
            <input
              type="file"
              name="img"
              onChange={handleChange}
              className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
            />
            <p className="text-xs text-gray-400 mt-2">
              PNG, JPG SVG, WEBP, and GIF are Allowed.
            </p>
          </div>
          <div>
            <label className="mb-2 text-lg block">User</label>
            <input
              type="text"
              name="user"
              value={data.user}
              onChange={handleChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-lg block">Brand</label>
            <input
              type="text"
              name="Brand"
              value={data.Brand}
              onChange={handleChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-lg block">Price</label>
            <input
              type="text"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-lg block">Category</label>
            <input
              type="text"
              name="category"
              value={data.category}
              onChange={handleChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
