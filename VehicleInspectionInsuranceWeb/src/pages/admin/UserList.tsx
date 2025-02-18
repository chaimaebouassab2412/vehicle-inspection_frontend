import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

interface Vehicle {
  id: number;
  matricule: string;
  model: string;
  inspectionDate: string;
  status: 'Pending' | 'Completed' | 'Expired';
}

interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  state: string;
  country: string;
  vehicles: Vehicle[];
}

const UserList = () => {
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      city: "New York",
      state: "NY",
      country: "US",
      vehicles: [
        {
          id: 1,
          matricule: "ABC-123",
          model: "Toyota Camry 2020",
          inspectionDate: "2024-03-15",
          status: "Pending"
        }
      ]
    }
    // Add more sample data as needed
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Vehicle Owners</h2>
        <button className="btn btn-primary">Add Owner</button>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Email</th>
                  <th>Vehicle Matricule</th>
                  <th>Car Model</th>
                  <th>Inspection Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  user.vehicles.map(vehicle => (
                    <tr key={`${user.id}-${vehicle.id}`}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{vehicle.matricule}</td>
                      <td>{vehicle.model}</td>
                      <td>{vehicle.inspectionDate}</td>
                      <td>
                        <span className={`badge bg-${
                          vehicle.status === 'Completed' ? 'success' : 
                          vehicle.status === 'Pending' ? 'warning' : 'danger'
                        }`}>
                          {vehicle.status}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <button className="btn btn-sm btn-info" title="View Details">
                            <FaEye />
                          </button>
                          <button className="btn btn-sm btn-warning" title="Edit">
                            <FaEdit />
                          </button>
                          <button className="btn btn-sm btn-danger" title="Delete">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList; 