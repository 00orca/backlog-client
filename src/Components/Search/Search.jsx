import React, { useState } from "react";
import { searchGames } from "../../backlogApi";
import styles from "./_style.module.scss";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import GameCard from "../Game/GameCard";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Search term:", searchTerm);

    // Call searchGame function from backlogApi.js
    const results = await searchGames(searchTerm);
    console.log("Search results:", results);

    setSearchResults(results);
  };

  return (
    <div className={styles["search-container"]}>
      <form
        onSubmit={handleSubmit}
        className={styles["search-container__form"]}
      >
        <input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles["search-container__form__input"]}
        />

        <button type="submit">
          <MagnifyingGlassIcon />
        </button>
      </form>
      <div className={styles["search-container__search-result"]}>
        {searchResults?.map((result) => (
          <div
            className={styles["search-container__search-result__item"]}
            key={result.id}
          >
            <GameCard name={result.name} image_id={result.cover?.image_id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
