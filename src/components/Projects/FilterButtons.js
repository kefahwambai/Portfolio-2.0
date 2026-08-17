import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const categories = ["All", "Fullstack", "Frontend", "Backend"];
const languages = ["All", "Reactjs", "RubyRailsapi", "Laravel", "Vuejs"];

const FilterButtons = ({ handleFilter }) => {
  const handleCategoryChange = (category) => {
    handleFilter("category", category);
  };

  const handleLanguageChange = (language) => {
    handleFilter("language", language);
  };

  console.log("FilterButtons - Rendering");


  return (
    <div style={{ marginBottom: "20px" }}>
      <h5 style={{ textAlign:"center",fontSize: "1rem",color: "silver", marginBottom: "2rem" }}>
        Check out some the projects I have recently worked on. Use button to toogle the different categories.
      </h5>
      <ButtonGroup toggle>
        {categories.map((category, index) => (
          <ToggleButton
            key={index}
            type="radio"
            class="Cattogglebtn"
            variant="outline-light"
            name="category"
            value={category}
            checked={handleFilter.category === category}
            onChange={() => handleCategoryChange(category)}
          >
            {category}
          </ToggleButton>
        ))}
         {languages.map((language, index) => (
          <ToggleButton
            key={index}
            type="radio"
            variant="outline-light"
            name="language"
            class="Cattogglebtn"
            value={language}
            checked={handleFilter.language === language}
            onChange={() => handleLanguageChange(language)}
          >
            {language}
          </ToggleButton>
        ))}
      </ButtonGroup>
     
    </div>
  );
};

export default FilterButtons;
