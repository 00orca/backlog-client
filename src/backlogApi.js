export const searchGames = async (searchTerm) => {
  const url = `http://localhost:3000/igdb/search/${searchTerm}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getGame = async (gameId) => {
  const url = `http://localhost:3000/igdb/game/${gameId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data[0]; // Access the first element of the array
  } catch (error) {
    console.error("Error:", error);
  }
};
