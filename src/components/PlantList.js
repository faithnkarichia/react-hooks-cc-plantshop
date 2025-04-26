import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
    {plants.map((plant) => (
      <PlantCard
        key={plant.id}
        plantsId={plant.id}
        plantName={plant.name}
        plantImage={plant.image}
        plantPrice={plant.price}
        initialStock={plant.inStock} 
      />
    ))}
  </ul>
  
  );
}

export default PlantList;
