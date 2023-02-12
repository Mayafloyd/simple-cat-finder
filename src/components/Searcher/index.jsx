import React, { useState } from "react";
import styles from "./searcher.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { createSearchParams, useNavigate } from "react-router-dom";

const Searcher = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchWord();
    }
  };
  const searchWord = async () => {
    const breedCat = inputValue.toLocaleLowerCase();
    // 👇️ navigate to /
    const API_URL = `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${breedCat}&api_key=3c1ae89f-68f8-4512-98b6-e5e53e925adb`;
    try {
      let response = await (await fetch(API_URL)).json();

      // console.log("response", response);
      navigate(
        {
          pathname: "search",
          search: `?${createSearchParams({
            breed: breedCat,
          })}`,
        },
        { state: { myArrayCats: response } }
      );
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={styles.inputSearcher}
      />
      <div className={styles.searchContainer} onClick={searchWord}>
        <SearchIcon
          sx={{ color: "white", fontSize: 40, backgroundColor: "transparent" }}
        />
      </div>
    </div>
  );
};

export default Searcher;
