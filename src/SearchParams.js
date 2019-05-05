import React, { useState } from "react";
import { ANIMALS } from "petfinder-client";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState(["Havanese", "Maltese", "Bichon Frise"]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "Havanese", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor={"location"}>
          Location
          <input
            onChange={e => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
