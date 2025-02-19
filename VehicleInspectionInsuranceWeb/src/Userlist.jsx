import axios from 'axios';
import { Edit, Trash2, User, Eye, Users } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function formatDate(inputDate) {
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

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
        "https://67b62e7d07ba6e5908400357.mockapi.io/users"
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
          `https://67b62e7d07ba6e5908400357.mockapi.io/users/${id}`
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
                        <td className="p-2 sm:p-3">{user.car_model || 'Tesla M3'}</td>
                        <td className="p-2 sm:p-3">{formatDate(user.date) || 'jan 21 2025'}</td>
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
                <h3 className="text-lg font-medium">No users found</h3>
                <p className="text-gray-500">Add a new user or modify your search.</p>
              </div>
            )}
        </>}
    </div>
  );
}