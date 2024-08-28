import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let res = await fetch("http://127.0.0.1:8000/allUser/");
        let datas = await res.json();
        setData(datas);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, []);

  const deleteUser = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/user/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item.id !== id));
      console.log("User deleted successfully");
    } catch (e) {
      console.log("Delete User failed", e.message);
    }
  };

  return (
    <>
      <div className="font-sans overflow-x-auto">
        <h1>All User</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Is User
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
                  {item.username}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {item.email}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {item.is_user? "is_user": "is_admin"}
                </td>
                
                <td className="px-4 py-4 text-sm text-gray-800">
                  <Link to={`/admin/editUser/${item.id}`} className="text-blue-600 mr-4">Edit</Link>
                  <button
                    className="text-red-600"
                    onClick={() => deleteUser(item.id)}
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

export default AllUsers;
