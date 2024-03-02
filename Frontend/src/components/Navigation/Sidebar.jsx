/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import { useCallback } from "react";
import { categories } from "../../utils/constant";


const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const handleSelectedCategory = useCallback(
    (categoryName) => {
      setSelectedCategory((prevState) => categoryName);
    },
    [setSelectedCategory]
  );

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "FC1503",
            color: "fff",
          }}
          onClick={() => handleSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              paddingRight: "15px",
            }}
          >
            {category.icon}
          </span>

          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          ></span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
