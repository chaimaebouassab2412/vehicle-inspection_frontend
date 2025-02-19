/*import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";*/

/*function Userlist() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
    console.log("Fetching user data...");
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
        "Are you sure you want to delete this user?"
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
    <div className="h-screen bg-white text-black flex flex-col p-4 sm:p-6 w-full">
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
                  <th className="p-2 border border-gray-400">Id</th>
                  <th className="p-2 border border-gray-400">Name</th>
                  <th className="p-2 border border-gray-400">E-Mail</th>
                  <th className="p-2 border border-gray-400">Matricule</th>
                  <th className="p-2 border border-gray-400">Car Model</th>
                  <th className="p-2 border border-gray-400">Inspection Date</th>
                  <th className="p-2 border border-gray-400">Inspection Status</th>
                  <th className="p-2 border border-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => {
                  return (
                    <tr className="hover:bg-gray-100" key={user.id}>
                      <td className="p-2 border border-gray-400">{user.id}</td>
                      <td className="p-2 border border-gray-400">{user.username}</td>
                      <td className="p-2 border border-gray-400">{user.email}</td>
                      <td className="p-2 border border-gray-400">{user.matricule}</td>
                      <td className="p-2 border border-gray-400">{user.carModel}</td>
                      <td className="p-2 border border-gray-400">{user.inspectionDate}</td>
                      <td className="p-2 border border-gray-400">{user.inspectionStatus}</td>
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

export default Userlist;*/

import axios from 'axios';
import { Edit, Trash2, User, Eye, Users } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const UserManagementCard = ({ userCount }) => {
  return (
    <div className="p-6 mx-auto dark:bg-[#2d2d2d] bg-[#fff] rounded-xl shadow-md flex items-center space-x-4 mb-4">
      <div className="flex-shrink-0 bg-blue-500 p-3 rounded-lg">
        <Users className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-gray-500 text-sm font-medium">Total Users</p>
        <p className="text-2xl font-bold">{userCount}</p>
      </div>
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-600';
    case 'Pending': return 'bg-yellow-100 text-yellow-600';
    case 'Failed': return 'bg-red-100 text-red-600';
    default: return 'bg-green-100 text-green-600';
  }
};

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
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
        "Are you sure you want to delete this user?"
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

  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = userList.filter(user =>
    user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search for a user..."
          className="border p-2 rounded w-full sm:w-1/3 bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/portal/create-user" className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto">+ Add User</Link>
      </div>

      {isLoading ? (
        <img
          src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"
          className="mx-auto"
        />
      ) :
        <>
          <UserManagementCard userCount={userList.length} />

          {filteredUsers.length > 0 ?
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border rounded-lg overflow-hidden dark:bg-[#4d4d4d] bg-[#fff]">
                <thead>
                  <tr className="dark:bg-[#3d3d3d] bg-[#eee] text-sm sm:text-base">
                    <th className="p-3 sm:p-3 text-left">ID</th>
                    <th className="p-3 sm:p-3 text-left">User</th>
                    <th className="p-3 sm:p-3 text-left">Email</th>
                    <th className="p-3 sm:p-3 text-left">Registration</th>
                    <th className="p-3 sm:p-3 text-left">Car Model</th>
                    <th className="p-3 sm:p-3 text-left">Date</th>
                    <th className="p-3 sm:p-3 text-left">Status</th>
                    <th className="p-3 sm:p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    filteredUsers.map(user => (
                      <tr key={user.id} className="border-t text-sm sm:text-base">
                        <td className="p-2 sm:p-3">{user.id}</td>
                        <td className="p-2 sm:p-3 flex items-center gap-2">
                          <User className="w-4 h-4" /> {user.username}
                        </td>
                        <td className="p-2 sm:p-3">{user.email}</td>
                        <td className="p-2 sm:p-3">
                          <span className="dark:bg-[#3d3d3d] bg-[#f1f1f1] px-2 py-1 rounded">{user.registration || 'X423A'}</span>
                        </td>
                        <td className="p-2 sm:p-3">{user.car || 'Tesla M3'}</td>
                        <td className="p-2 sm:p-3">{user.date || '21 jan 2025'}</td>
                        <td className="p-2 sm:p-3">
                          <span className={`px-2 py-1 rounded ${getStatusClass(user.status || '')}`}>
                            {user.status || 'Completed'}
                          </span>
                        </td>
                        <td className="p-2 sm:p-3 flex flex-wrap gap-2">
                          <Link to={`/portal/user-view/${user.id}`} className="text-gray-800 bg-[#f1f1f1] p-2 rounded">
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link to={`/portal/user-edit/${user.id}`} className="text-blue-500 bg-[#f1f1f1] p-2 rounded">
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button onClick={() => handleDelete(user.id)} className="text-red-500 bg-[#f1f1f1] p-2 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>))
                  }
                </tbody>
              </table>
            </div> : (
              <div className="text-center p-12">
                <h3 className="text-lg font-medium">No vehicles found</h3>
                <p className="text-gray-500">Add a new vehicle or modify your search.</p>
              </div>
            )}
        </>}
    </div>
  );
}