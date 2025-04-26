import React, { useState } from "react";

function PlantCard({ plantPrice, plantImage, plantName, plantsId, initialStock = true }) {
  const [inStock, setInStock] = useState(initialStock);

  const handleInstock = () => {
    fetch(`http://localhost:6001/plants/${plantsId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inStock: !inStock,
      }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        setInStock(updatedPlant.inStock);
      })
      .catch((error) => {
        console.error("Error updating plant:", error);
      });
  };

  return (
    <li className="card" data-testid="plant-item"> 
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {inStock ? (
        <button className="primary" onClick={handleInstock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleInstock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
