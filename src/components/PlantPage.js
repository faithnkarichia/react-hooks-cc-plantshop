import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant,handleSearch}) {
  console.log(plants,"plantpage")
  return (
    <main>
     <NewPlantForm onAddPlant={onAddPlant} />
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
