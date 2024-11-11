import React, { useEffect, useState } from "react";
import axios from "axios";

const AddPlague = () => {
  const [name, setName] = useState("");
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [nomenclature, setNomenclature] = useState("");
  const [family, setFamily] = useState("");
  const [plagueTypeId, setPlagueTypeId] = useState(null); // Solo el ID
  const [description, setDescription] = useState("");
  const [controlMethods, setControlMethods] = useState("");
  const [damageSymptoms, setDamageSymptoms] = useState("");
  const [plagueTypes, setPlagueTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://cropguardbackend-production.up.railway.app/api/plague-types/")
      .then((response) => setPlagueTypes(response.data.data))
      .catch((error) => console.error("Error fetching plague types:", error));
  }, []);

  const handleSubmit = (event) => {
    console.log(plagueTypeId);
    event.preventDefault();
    axios
      .post("https://cropguardbackend-production.up.railway.app/api/plagues/create/", {
        name,
        common_name: commonName,
        scientific_name: scientificName,
        nomenclature,
        family,
        plague_type: plagueTypeId, // Solo el ID
        description,
        control_methods: controlMethods,
        damage_symptoms: damageSymptoms,
      })
      .then((response) => {
        console.log("Plague added:", response.data);
        // Limpiar los campos del formulario
        setName("");
        setCommonName("");
        setScientificName("");
        setNomenclature("");
        setFamily("");
        setPlagueTypeId(null); // Limpiar el ID
        setDescription("");
        setControlMethods("");
        setDamageSymptoms("");
      })
      .catch((error) => console.error("Error adding plague:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Plague</h2>
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
          onChange={(e) => setPlagueTypeId(e.target.value)}
          value={plagueTypeId || ""}
        >
          <option value="">Select Type</option>
          {plagueTypes.map((type) => (
            <option key={type.id} value={type.id}>
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
      <button type="submit">Add Plague</button>
    </form>
  );
};

export default AddPlague;
