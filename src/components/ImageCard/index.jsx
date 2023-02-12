import React, { useState } from "react";
import styles from "./ImageCard.module.css";
import MyModal from "../MyModal";

const ImageCard = (props) => {
  const { cat } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log("cat", cat);
  return (
    <>
      <div className={styles.container} onClick={handleOpen}>
        <img src={cat.url} alt="" className={styles.catImage} />
      </div>
      <MyModal
        open={open}
        onClose={() => handleClose()}
        title={`${cat?.breeds[0]?.name}`}
      >
        <div className={styles.modalContainer}>
          {/* <p>Name: {cat?.breeds[0]?.name}</p> */}
          <p> {cat?.breeds[0]?.description}</p>
          <p>Origin: {cat?.breeds[0]?.origin} </p>
          <p>Temperament: {cat?.breeds[0]?.temperament} </p>
          <p>URL: {cat?.url}</p>
          <img src={cat.url} alt="" className={styles.catImage} />
        </div>
      </MyModal>
    </>
  );
};

export default ImageCard;
