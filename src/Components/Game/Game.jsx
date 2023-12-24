import React, { useEffect, useState } from "react";
import { getGame } from "../../backlogApi";
import style from "./_style.module.scss";
import { head } from "lodash";
import LinesEllipsis from "react-lines-ellipsis";

const Game = (props) => {
  const { game_id } = props;

  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        // Call getGame function from backlogApi.js using async/await
        const game = await getGame(game_id);
        console.log("Game:", game);
        setGame(game);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();
  }, []);

  const developers = game.involved_companies?.filter(
    (involved_company) => involved_company.developer
  );
  const publishers = game.involved_companies?.filter(
    (involved_company) => involved_company.publisher
  );

  const randomScreenshot = Math.floor(Math.random() * game.screenshots?.length);

  return (
    game && (
      <div className={style["game-container"]}>
        <div className={style["game-container__parallax"]}>
          {game.screenshots?.length > 0 && (
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${game.screenshots[randomScreenshot].image_id}.jpg`}
              alt={game.name}
            />
          )}
        </div>
        <div className={style["game-container__header"]}>
          <div className={style["game-container__header__cover"]}>
            {game.cover && (
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
                alt={game.name}
              />
            )}
          </div>

          <div className={style["game-container__header__body"]}>
            <div className={style["game-container__header__body__title"]}>
              {game.name}
            </div>
            <div className={style["game-container__header__body__date"]}>
              {game.first_release_date}
            </div>
            <div className={style["game-container__header__body__companies"]}>
              Publié par
              {publishers?.map((involved_company) => (
                <div
                  className={
                    style["game-container__header__body__companies__item"]
                  }
                  key={involved_company.id}
                >
                  {involved_company.company.name}
                  {involved_company !== publishers[publishers.length - 1] &&
                    ","}
                </div>
              ))}
            </div>
            <div className={style["game-container__header__body__companies"]}>
              Developpé par
              {developers?.map((involved_company) => (
                <div
                  className={
                    style["game-container__header__body__companies__item"]
                  }
                  key={involved_company.id}
                >
                  {involved_company.company.name}
                  {involved_company !== developers[developers.length - 1] &&
                    ","}
                </div>
              ))}
            </div>
            <div className={style["game-container__header__body__consoles"]}>
              {game.platforms?.map((platform) => (
                <div
                  className={
                    style["game-container__header__body__consoles__item"]
                  }
                  key={platform.id}
                >
                  {platform.name}
                </div>
              ))}
            </div>
            <div className={style["game-container__header__body__summary"]}>
              <LinesEllipsis
                text={game.summary}
                maxLine="10"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Game;
