import React, { useState } from 'react';
import {
    Car, Search, Eye, Edit2, Trash2, Calendar, Hash, Fuel, Navigation
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IconButton = ({ Icon, color, onClick }) => (
    <button
        onClick={onClick}
        className="p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
        <Icon className={`w-5 h-5 ${color}`} />
    </button>
);

const VehicleInfo = ({ Icon, text }) => (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <Icon className="w-4 h-4" />
        <span>{text}</span>
    </div>
);

const VehicleCard = ({ vehicle, theme }) => (
    <div className={`rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300
      ${theme === "dark" ? "bg-[#2d2d2d] text-white" : "bg-white text-gray-800"}`}>

        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{vehicle.marque}</h3>
            <div className="flex gap-2">
                <IconButton Icon={Eye} color="text-blue-500" theme={theme} />
                <IconButton Icon={Edit2} color="text-yellow-500" theme={theme} />
                <IconButton Icon={Trash2} color="text-rose-500" theme={theme} />
            </div>
        </div>

        <div className="space-y-2">
            <VehicleInfo Icon={Hash} text={vehicle.numeroSerie} />
            <VehicleInfo Icon={Calendar} text={vehicle.annee} />
            <VehicleInfo Icon={Fuel} text={vehicle.carburant} />
            <VehicleInfo Icon={Navigation} text={vehicle.kilometrage} />
        </div>
    </div>
);


const VehicleList = ({ theme }) => {
    const [vehicles] = useState([
        { id: 1, marque: 'Mercedes Benz', numeroSerie: '15648752', annee: '2015', carburant: 'electric', kilometrage: '12 km' },
        { id: 2, marque: 'BMW', numeroSerie: '18749632', annee: '2020', carburant: 'gasoline', kilometrage: '25000 km' },
        { id: 3, marque: 'Audi', numeroSerie: '19874563', annee: '2019', carburant: 'diesel', kilometrage: '45000 km' }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const filteredVehicles = vehicles.filter(vehicle =>
        vehicle.marque.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.numeroSerie.includes(searchTerm) ||
        vehicle.carburant.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <Car className="w-8 h-8 text-blue-500" />
                        <h1 className="text-2xl font-bold">Vehicle Management</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search a vehicle..."
                                className="pl-10 pr-4 py-2 w-full sm:w-64 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#2d2d2d] bg-[#fff] dark:text-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Link to="/portal/create-car" className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <span>New Vehicle</span>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVehicles.length > 0 ? (
                        filteredVehicles.map(vehicle => <VehicleCard theme={theme} key={vehicle.id} vehicle={vehicle} />)
                    ) : (
                        <div className="text-center py-12">
                            <Car className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium">No vehicles found</h3>
                            <p className="text-gray-500">Add a new vehicle or modify your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default VehicleList;
