import React from "react";
import PropTypes from "prop-types";
import styles from "./_style.module.scss";

function GameCard(props) {
  const { name, image_id } = props;
  return (
    <div className={styles["game-card-container"]}>
      <div className={styles["game-card-container__image-wrapper"]}>
        {image_id && (
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${image_id}.jpg`}
            alt={name}
          />
        )}
      </div>
      <div className={styles["game-card-container__body"]}>
        <div className={styles["game-card-container__body__name"]}>{name}</div>
        <div className={styles["game-card-container__body__plateforms"]}>
          {/* <span>PS4</span>
          <span>PC</span>
          <span>Switch</span> */}
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  image_id: PropTypes.string.isRequired,
};

GameCard.defaultProps = {
  name: "",
  image_id: "",
};

export default GameCard;
