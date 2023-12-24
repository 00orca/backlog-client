// pages/GamePage.js
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Game from "../Components/Game/Game";

function GamePage() {
  //   const { slug } = useParams();
  const location = useLocation();
  const { id } = location.state;
  console.log("location", location);

  return <Game game_id={id} />;
}

export default GamePage;
