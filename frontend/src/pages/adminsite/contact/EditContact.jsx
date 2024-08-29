import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        let res = await fetch(`http://127.0.0.1:8000/contact/${id}/`);
        let contact = await res.json();
        setFormData(contact);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchContact();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateContact = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/contact/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("contact Updated Successfully")
        navigate("/admin");
      } else {
        toast("Update failed");
      }
    } catch (e) {
      toast("Update contact failed", e.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      <h1 className="text-xl font-bold mb-4">Edit Contact</h1>
      <div>
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
      </div>
      <button
        onClick={updateContact}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default EditContact;
