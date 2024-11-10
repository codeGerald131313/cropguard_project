import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../PlagueList.css';

const PlagueList = () => {
    const [plagues, setPlagues] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/plagues/')
            .then(response => setPlagues(response.data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Function to format date strings to a readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // You can customize the format if needed
    };

    // Function to handle delete action
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/plagues/delete/${id}/`)
            .then(response => {
                console.log('Plague deleted:', response.data);
                // Update the state to remove the deleted plague
                setPlagues(plagues.filter(plague => plague.id !== id));
            })
            .catch(error => console.error('Error deleting plague:', error));
    };

    return (
        <div>
            <h2>Plague List</h2>
     
          <button onClick={() => navigate('/plagues/add')}>Add Plague</button>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Common Name</th>
                        <th>Scientific Name</th>
                        <th>Nomenclature</th>
                        <th>Family</th>
                        <th>Plague Type</th>
                        <th>Description</th>
                        <th>Control Methods</th>
                        <th>Damage Symptoms</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plagues.map(plague => (
                        <tr key={plague.id}>
                            <td>{plague.id}</td>
                            <td>{plague.name}</td>
                            <td>{plague.common_name}</td>
                            <td>{plague.scientific_name}</td>
                            <td>{plague.nomenclature}</td>
                            <td>{plague.family}</td>
                            <td>{plague.plague_type ? plague.plague_type.name : 'N/A'}</td>
                            <td>{plague.description}</td>
                            <td>{plague.control_methods}</td>
                            <td>{plague.damage_symptoms}</td>
                            <td>{formatDate(plague.created_at)}</td>
                            <td>{formatDate(plague.updated_at)}</td>
                            <td>
                                <button onClick={() => navigate(`/plagues/edit/${plague.id}`)}>Edit</button>
                                <button onClick={() => handleDelete(plague.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlagueList;
