import React from "react";
import PropTypes from "prop-types";
import styles from "./_style.module.scss";
import LinesEllipsis from "react-lines-ellipsis";

function GameCard(props) {
  const { game } = props;
  const { name, cover, platforms } = game;
  const image = cover?.image_id;

  return (
    <div className={styles["game-card-container"]}>
      <div className={styles["game-card-container__image-wrapper"]}>
        {image && (
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${image}.jpg`}
            alt={name}
          />
        )}
      </div>
      <div className={styles["game-card-container__body"]}>
        <div className={styles["game-card-container__body__name"]}>
          <LinesEllipsis
            text={name}
            maxLine={2}
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div className={styles["game-card-container__body__consoles"]}>
          {platforms?.slice(0, 3).map((platform) => (
            <div
              className={styles["game-card-container__body__consoles__item"]}
              key={platform.id}
            >
              {platform.abbreviation}
            </div>
          ))}
          {platforms?.length > 3 && (
            <div
              className={styles["game-card-container__body__consoles__item"]}
            >
              +{platforms.length - 3}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
};

GameCard.defaultProps = {
  game: {},
};

export default GameCard;
