import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideUser, LucideMail, LucideCalendar, LucideMapPin, LucideGlobe, LucideLoader2 } from 'lucide-react';

// Component réutilisable pour les inputs
const InputComponent = ({ label, name, value, onChange, type, placeholder, error, icon: Icon }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-[#4a5568] dark:text-[#a0aec0] mb-1">{label}</label>
    <div className="flex items-center">
      <Icon className="absolute left-3 text-[#a0aec0] dark:text-[#a0aec0]" size={20} />
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4299e1] dark:focus:ring-[#ffffff] focus:border-transparent bg-[#fff] dark:bg-[#1f2937] border-[#e2e8f0] dark:border-[#1f2937] text-[#2d3748] dark:text-[#fff] ${error ? "border-[#f56565] dark:border-[#f56565]" : ""}`}
        >
          {name === 'status' ? (
            <>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </>
          ) : null}
        </select>
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4299e1] dark:focus:ring-[#ffffff] focus:border-transparent bg-[#fff] dark:bg-[#1f2937] border-[#e2e8f0] dark:border-[#1f2937] text-[#2d3748] dark:text-[#fff] ${error ? "border-[#f56565] dark:border-[#f56565]" : ""}`}
          placeholder={placeholder}
        />
      )}
    </div>
    {error && <span className="text-[#f56565] dark:text-[#f56565] text-sm mt-1 block">{error}</span>}
  </div>
);

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      registration: "",
      date: "",
      car_model: "",
      status: "Pending"
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Please enter a username";
      } else if (values.username.length < 5) {
        errors.username = "Username must be at least 5 characters";
      } else if (values.username.length > 20) {
        errors.username = "Username must not exceed 20 characters";
      }

      if (!values.email) {
        errors.email = "Please enter an email";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.registration) {
        errors.registration = "Please enter a registration";
      }

      if (!values.date) {
        errors.date = "Please enter a date";
      } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date)) {
        errors.date = "Please enter date in YYYY-MM-DD format";
      }

      if (!values.car_model) {
        errors.car_model = "Please enter a car model";
      }

      if (!values.status) {
        errors.status = "Please select a status";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post("https://67b62e7d07ba6e5908400357.mockapi.io/users", values);
        navigate("/portal/user-list");
      } catch (error) {
        console.log(error);
        alert("Validation failed");
        setLoading(false);
      }
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fafc] to-[#edf2f7] dark:from-[#111827] dark:to-[#1a202c] flex items-center justify-center p-4">
      <div className="bg-[#fff] dark:bg-[#111827] rounded-xl shadow-2xl p-8 w-full max-w-4xl transform transition-all duration-300 hover:shadow-lg">
        <h2 className="text-3xl font-bold text-[#2d3748] dark:text-[#fff] mb-6 text-center">Create New User</h2>
        
        <form onSubmit={myFormik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <InputComponent
            label="Username"
            name="username"
            value={myFormik.values.username}
            onChange={myFormik.handleChange}
            type="text"
            placeholder="Enter username"
            error={myFormik.errors.username}
            icon={LucideUser}
          />

          {/* Email */}
          <InputComponent
            label="Email"
            name="email"
            value={myFormik.values.email}
            onChange={myFormik.handleChange}
            type="email"
            placeholder="your.email@example.com"
            error={myFormik.errors.email}
            icon={LucideMail}
          />

          {/* Registration */}
          <InputComponent
            label="Registration"
            name="registration"
            value={myFormik.values.registration}
            onChange={myFormik.handleChange}
            type="text"
            placeholder="Enter registration"
            error={myFormik.errors.registration}
            icon={LucideMapPin}
          />

          {/* Date */}
          <InputComponent
            label="Date"
            name="date"
            value={myFormik.values.date}
            onChange={myFormik.handleChange}
            type="text"
            placeholder="YYYY-MM-DD"
            error={myFormik.errors.date}
            icon={LucideCalendar}
          />

          {/* Car Model */}
          <InputComponent
            label="Car Model"
            name="car_model"
            value={myFormik.values.car_model}
            onChange={myFormik.handleChange}
            type="text"
            placeholder="Enter car model"
            error={myFormik.errors.car_model}
            icon={LucideGlobe}
          />

          {/* Status */}
          <InputComponent
            label="Status"
            name="status"
            value={myFormik.values.status}
            onChange={myFormik.handleChange}
            type="select"
            placeholder=""
            error={myFormik.errors.status}
            icon={LucideGlobe}
          />

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full max-w-xs bg-[#4299e1] hover:bg-[#3182ce] dark:bg-[#4a5568] dark:hover:bg-[#383f4a] text-[#fff] font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:bg-[#a0aec0] disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <LucideLoader2 className="animate-spin" size={20} />
                  <span>Submitting...</span>
                </>
              ) : (
                "Create"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserCreate;