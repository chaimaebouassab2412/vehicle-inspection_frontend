import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Userlist() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
    console.log("welcome");
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://63a9bccb7d7edb3ae616b639.mockapi.io/users"
      );
      setUserList(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure do you want to delete the data?"
      );
      if (confirmDelete) {
        await axios.delete(
          `https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`
        );
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen bg-white text-black flex flex-col p-4 sm:p-6">
      <div className="bg-[#0092b1] text-white flex flex-wrap justify-center items-center p-3 sm:p-4 mb-4 rounded shadow-md gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold bg-white text-black text-center p-2 rounded shadow-md flex-1">
          User-List
        </h1>
        <Link
          to="/portal/create-user"
          className="bg-yellow-400 text-black px-4 py-2 rounded shadow-md hover:bg-yellow-500"
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Create User
        </Link>
      </div>

      <div className="bg-[#0092b1] shadow-md rounded-lg flex-1 overflow-auto p-4">
        <h6 className="text-lg font-semibold mb-3 text-center bg-white p-2 rounded shadow-md">
          DataTables
        </h6>
        {isLoading ? (
          <img
            src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"
            className="mx-auto"
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-400 text-black bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    Id
                  </th>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    Name
                  </th>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    E-Mail
                  </th>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    City
                  </th>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    State
                  </th>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    Country
                  </th>
                  <th className="p-2 border border-gray-400 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => {
                  return (
                    <tr className="hover:bg-gray-100">
                      <td className="p-2 border border-gray-400">{user.id}</td>
                      <td className="p-2 border border-gray-400">
                        {user.username}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {user.email}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {user.city}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {user.state}
                      </td>
                      <td className="p-2 border border-gray-400">
                        {user.country}
                      </td>
                      <td className="p-2 border border-gray-400 flex flex-wrap space-x-2">
                        <Link
                          to={`/portal/user-view/${user.id}`}
                          className="bg-blue-500 px-3 py-1 rounded text-white text-sm"
                        >
                          View
                        </Link>
                        <Link
                          to={`/portal/user-edit/${user.id}`}
                          className="bg-yellow-400 px-3 py-1 rounded text-black text-sm"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-500 px-3 py-1 rounded text-white text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Userlist;
