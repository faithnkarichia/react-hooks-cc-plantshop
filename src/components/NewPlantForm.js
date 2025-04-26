import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
const [formData, newFormData]= useState({
  name: "",
  image: "",
  price: ""
})

const handleChange=(e)=>{
  const {name,value}=e.target
  newFormData({
    ...formData,[name]:value
  })
}
const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((newPlant) => {
      onAddPlant(newPlant);
      newFormData({
        name: "",
        image: "",
        price: ""
      });
    })
    .catch((error) => console.error("Error adding plant:", error));
};




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
