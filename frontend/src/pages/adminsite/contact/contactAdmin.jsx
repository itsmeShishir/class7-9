import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContactAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let res = await fetch("http://127.0.0.1:8000/contact/");
        let datas = await res.json();
        setData(datas);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, []);

  const deleteContact = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/contact/${id}/`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item.id !== id));
      console.log("Contact deleted successfully");
    } catch (e) {
      console.log("Delete contact failed", e.message);
    }
  };

  return (
    <>
      <div className="font-sans overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {item.firstName} {item.lastName}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {item.email}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {item.phone}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {item.description}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  <Link to={`/admin/editContact/${item.id}`} className="text-blue-600 mr-4">Edit</Link>
                  <button
                    className="text-red-600"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactAdmin;
