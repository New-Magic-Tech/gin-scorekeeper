import Stacked from "../../components/Stacked"
import Row from "../../components/Row"
import ScoreInput from "./ScoreInput"
import ScoreDisplay from "./ScoreDisplay"
import Section from "../../components/Section"
import GameOver from "./GameOver"

import { useAppSelector } from "../../app/hooks"
import { selectGameOver } from "./gameSlice"

export default function Game(){
    const gameOver = useAppSelector(selectGameOver).gameOver
    return (
        <Stacked centered>
            <h1 className="my-3 text-center text-6xl sm:text-9xl text-gold ">
                Gin Scorekeeper
            </h1>
            {gameOver?
            <GameOver/>
            :<Row>
                <Section>
                    <ScoreInput/>
                </Section>
                
                <Section>
                    <ScoreDisplay/>
                </Section>
            </Row>}
        </Stacked>
    )
}