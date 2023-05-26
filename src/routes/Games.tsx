import { useAppSelector } from "../app/hooks"
import { selectUserDoc } from "../features/auth/authSlice"

import Section from "../components/Section"
import Stacked from "../components/Stacked"
import GameInfo from "../features/games/GameInfo"

import { GameData } from "../utils/InterfaceModels"



export default function Games() {
    const userDoc = useAppSelector(selectUserDoc);
    const games: GameData[] = userDoc?.games.map((game: any) => ({
      player1Name: game.player1Name,
      player2Name: game.player2Name,
      player1Score: game.player1Score,
      player2Score: game.player2Score,
      winner: game.winner,
    })) || [];
  
    return (
      <Section>
          <h1 className="text-darkGreen text-3xl text-decoration: underline">Game History</h1>
        <Stacked>
          {games.length > 0 ? (
            games.map((game: GameData, index) => <GameInfo key={index} data={game} />)
          ) : (
            <p>No games yet</p>
          )}
        </Stacked>
      </Section>
    );
  }