import { IconButton, Paper } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
        <input className="search-bar" placeholder="Search..." value={searchTerm} onChange={handleChange} />
        <IconButton type="submit" sx={{p:"10px", color:"red"}}>
            <FaSearch />
        </IconButton>
    </Paper>
  );
};

export default SearchBar;
