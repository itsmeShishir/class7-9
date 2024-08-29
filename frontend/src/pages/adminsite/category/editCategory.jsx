import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    username: "",
    img: null, 
    description: ""
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let res = await fetch(`http://127.0.0.1:8000/category/${id}/`);
        let category = await res.json();
        setFormData(category);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchCategory();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "img") {
      setFormData((items) => ({
        ...items,
        img: event.target.files[0],  
      }));
    } else {
      setFormData((items) => ({
        ...items,
        [name]: value,
      }));
    }
  }

  const updatecategory = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/category/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Category Updated Successfully")
        navigate("/admin");
      } else {
        toast("Update failed");
      }
    } catch (e) {
      toast("Update category failed", e.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <form onSubmit={updatecategory}>
        <div className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
          <div>
            <label className="mb-2 text-lg block">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-lg block">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Large Input"
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div className="font-[sans-serif] max-w-md mx-auto">
            <label className="text-base text-gray-500 font-semibold mb-2 block">Upload file</label>
            <input
              type="file"
              name="img"
              onChange={handleInputChange}
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
              name="username"
              value={formData.username}
              onChange={handleInputChange}
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
      </div>
  );
};

export default EditCategory;
