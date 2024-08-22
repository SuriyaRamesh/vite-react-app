import { useState } from "react"


const UpdateGameState = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
        name: 'John',
    }
  });

  const handleClick = () => {
    setGame({...game, player: {...game.player, name: 'Bob'}});
  }

  return (
    <div>
      <h3>Game player name:  {game.player.name}</h3>
      <button onClick={handleClick}>UpdateGameState</button>
    </div>
  )
}

export default UpdateGameState
