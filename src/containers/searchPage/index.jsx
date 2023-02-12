import React from "react";
import styles from "./searchPage.module.css";
import { useSearchParams, useLocation } from "react-router-dom";
import ImageCard from "../../components/ImageCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { state } = useLocation();
  const galleryCats = state?.myArrayCats || [];
  console.log("galleryCats", searchParams.get("breed") === true);

  return (
    <div className={styles.container}>
      <h2>Search Page</h2>
      <p className={styles.searchWord}>
        {searchParams.get("breed")
          ? searchParams.get("breed")
          : "You have not searched for anything, but have some cats"}
      </p>
      <div className={styles.gallery}>
        {galleryCats?.map((cat, index) => (
          <ImageCard key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
