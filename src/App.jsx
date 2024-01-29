import playerData from "./playerData.js";
import BaseballCard from "./BaseballCard.jsx";
import { useState } from "react"
 
function App() {

  const cards = playerData.map((player) => <BaseballCard
  
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  key={player.cardId}
    />)

  return <>{cards}</>
}

export default App;
