import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPlague = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plague, setPlague] = useState(null);
    const [name, setName] = useState('');
    const [commonName, setCommonName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [nomenclature, setNomenclature] = useState('');
    const [family, setFamily] = useState('');
    const [plagueType, setPlagueType] = useState(null);
    const [description, setDescription] = useState('');
    const [controlMethods, setControlMethods] = useState('');
    const [damageSymptoms, setDamageSymptoms] = useState('');
    const [plagueTypes, setPlagueTypes] = useState([]);

    useEffect(() => {
        // Fetch the plague data
        axios.get(`http://localhost:8000/api/plagues/${id}/`)
            .then(response => {
                const data = response.data.data;
                setPlague(data);
                setName(data.name);
                setCommonName(data.common_name);
                setScientificName(data.scientific_name);
                setNomenclature(data.nomenclature);
                setFamily(data.family);
                setPlagueType(data.plague_type ? JSON.stringify(data.plague_type) : ''); // Set plagueType as a stringified object
                setDescription(data.description);
                setControlMethods(data.control_methods);
                setDamageSymptoms(data.damage_symptoms);
            })
            .catch(error => console.error('Error fetching plague details:', error));
        
        // Fetch plague types for the dropdown
        axios.get('http://localhost:8000/api/plague-types/')
            .then(response => setPlagueTypes(response.data.data))
            .catch(error => console.error('Error fetching plague types:', error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(JSON.parse(plagueType));
        const parsedPlagueType = JSON.parse(plagueType);
        const idTypePlague = parsedPlagueType.id;

        axios.put(`http://localhost:8000/api/plagues/update/${id}/`, {
            name,
            common_name: commonName,
            scientific_name: scientificName,
            nomenclature,
            family,
            plague_type: idTypePlague, // Convert back to object if needed
            description,
            control_methods: controlMethods,
            damage_symptoms: damageSymptoms
        })
        .then(response => {
            console.log('Plague updated:', response.data);
            navigate('/plagues'); // Redirect to the plague list
        })
        .catch(error => console.error('Error updating plague:', error));
    };

    if (!plague) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Plague</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Common Name:
                <input
                    type="text"
                    value={commonName}
                    onChange={(e) => setCommonName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Scientific Name:
                <input
                    type="text"
                    value={scientificName}
                    onChange={(e) => setScientificName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Nomenclature:
                <input
                    type="text"
                    value={nomenclature}
                    onChange={(e) => setNomenclature(e.target.value)}
                />
            </label>
            <br />
            <label>
                Family:
                <input
                    type="text"
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                />
            </label>
            <br />
            <label>
                Plague Type:
                <select
                    onChange={(e) => setPlagueType(e.target.value)}
                    value={plagueType}
                >
                    <option value="">Select Type</option>
                    {plagueTypes.map(type => (
                        <option key={type.id} value={JSON.stringify(type)}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Description:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Control Methods:
                <textarea
                    value={controlMethods}
                    onChange={(e) => setControlMethods(e.target.value)}
                />
            </label>
            <br />
            <label>
                Damage Symptoms:
                <textarea
                    value={damageSymptoms}
                    onChange={(e) => setDamageSymptoms(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Update Plague</button>
        </form>
    );
};

export default EditPlague;
