import React from 'react';
import { FaCar, FaClipboardCheck, FaHourglassHalf, FaExclamationTriangle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-4">
        {/* Stats Cards */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Registered Vehicles
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">127</div>
                </div>
                <div className="col-auto">
                  <FaCar className="text-gray-300" size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending Inspections
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                </div>
                <div className="col-auto">
                  <FaHourglassHalf className="text-gray-300" size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Completed Inspections
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">245</div>
                </div>
                <div className="col-auto">
                  <FaClipboardCheck className="text-gray-300" size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                    Expiring Insurances
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">7</div>
                </div>
                <div className="col-auto">
                  <FaExclamationTriangle className="text-gray-300" size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-4">
          <button className="btn btn-primary">
            <i className="fas fa-plus mr-2"></i> Schedule Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 