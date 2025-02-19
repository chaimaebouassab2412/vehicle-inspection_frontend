import React, { useState, useEffect } from 'react';
import { Calendar, Car, Power, Weight, Users, Hash, Circle, Navigation } from 'lucide-react';

const InputField = ({ label, name, type = 'text', value, onChange, icon: Icon }) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">{label}</label>
            <div className="relative flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                {Icon && <Icon className="ml-2 w-5 h-5" />}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full ${Icon ? 'pl-3' : 'pl-3'} p-2 bg-transparent outline-none`}
                    required
                />
            </div>
        </div>
    );
};

const CarCreate = ({theme}) => {

    const [formData, setFormData] = useState({
        marque: '', modele: '', numeroChasis: '', typeCarburant: '', nombrePlaces: '',
        poidsVide: '', capacite: '', puissance: '', dateAchat: '', kilometrage: '',
        couleur: '#000000', annee: '', immatriculation: '', status: ''
    });
    
    const [previewColor, setPreviewColor] = useState('#000000');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'couleur') setPreviewColor(value);
    };

    return (
        <div className={`min-h-screen transition duration-200 p-4 md:p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className={`max-w-4xl transition duration-200 mx-auto rounded-lg shadow-lg p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center gap-2 mb-8">
                    <Car className="w-8 h-8 text-blue-500" />
                    <h1 className="text-2xl font-bold">Car Registration</h1>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InputField label="Brand" name="marque" value={formData.marque} onChange={handleInputChange} />
                        <InputField label="Model" name="modele" value={formData.modele} onChange={handleInputChange} />
                        <InputField label="Chassis Number" name="numeroChasis" value={formData.numeroChasis} onChange={handleInputChange} icon={Hash} />
                        <div>
                            <label className="block text-sm font-medium">Fuel Type</label>
                            <select name="typeCarburant" value={formData.typeCarburant} onChange={handleInputChange} className={`${theme !== 'dark' ? 'bg-white' : 'bg-gray-800'}  w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500`}>
                                <option value="">Select</option>
                                <option value="essence">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="electrique">Electric</option>
                                <option value="hybride">Hybrid</option>
                            </select>
                        </div>
                        <InputField label="Number of Seats" name="nombrePlaces" type="number" value={formData.nombrePlaces} onChange={handleInputChange} icon={Users} />
                        <InputField label="Empty Weight (kg)" name="poidsVide" type="number" value={formData.poidsVide} onChange={handleInputChange} icon={Weight} />
                        <InputField label="Capacity (kg)" name="capacite" type="number" value={formData.capacite} onChange={handleInputChange} />
                        <InputField label="Power (hp)" name="puissance" type="number" value={formData.puissance} onChange={handleInputChange} icon={Power} />
                        <InputField label="Purchase Date" name="dateAchat" type="date" value={formData.dateAchat} onChange={handleInputChange} icon={Calendar} />
                        <InputField label="Mileage" name="kilometrage" type="number" value={formData.kilometrage} onChange={handleInputChange} icon={Navigation} />
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Color</label>
                            <div className="flex gap-2 items-center">
                                <Circle className="w-5 h-5" style={{ color: previewColor }} />
                                <input type="color" name="couleur" value={formData.couleur} onChange={handleInputChange} className="w-10 h-10 border rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button type="reset" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md" onClick={() => setFormData({})}>Reset</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarCreate;
