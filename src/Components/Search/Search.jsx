import React, { useState } from "react";
import { searchGames } from "../../backlogApi";
import styles from "./_style.module.scss";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import GameCard from "../Game/GameCard";
import mockGames from "../mockdata/MockGames";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call searchGame funcis it possibl ethat the probleme is form the my api that dosen't send the data to my phone which is contect through the localhostis it possibl ethat the probleme is form the my api that dosen't send the data to my phone which is contect through the localhosttion from backlogApi.js
    const results = await searchGames(searchTerm);
    // const results = mockGames;
    // console.log("Search results:", results);

    setSearchResults(results);
  };

  return (
    <div className={styles["search-container"]}>
      <form
        // onSubmit={handleSubmit}
        className={styles["search-container__form"]}
      >
        <input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles["search-container__form__input"]}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          onTouchStart={handleSubmit}
        >
          <MagnifyingGlassIcon width="20" height="20" />
        </button>
      </form>
      <div className={styles["search-container__search-result"]}>
        {searchResults?.map((result) => (
          <div
            className={styles["search-container__search-result__item"]}
            key={result.id}
          >
            <GameCard game={result} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
