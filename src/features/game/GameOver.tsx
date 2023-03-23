import Section from "../../components/Section"
import Stacked from "../../components/Stacked"
import Button from "../../components/Button"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectGameOver, selectNames, selectScore, newGame } from "./gameSlice"

export default function GameOver (){
    const winnerIndex = useAppSelector(selectGameOver).winnerIndex
    const winner = useAppSelector(selectNames)[winnerIndex]
    const scores = useAppSelector(selectScore)

    const dispatch = useAppDispatch()
    const handleNewGameClick = () =>{
        dispatch(newGame())
    }
    return (
        <Section>
            <div className="bg-gold rounded-xl py-8">
            <Stacked>
                <h2 className="text-center text-3xl text-darkGreen">
                    {winner} Wins!
                </h2>
                <h3 className="text-center text-3xl text-darkGreen my-8"><span className="text-blue">{scores[0]}</span> vs <span className='text-red'>{scores[1]}</span></h3>
                <Button onClick = {handleNewGameClick}>New Game</Button>
            </Stacked>
            </div>
        </Section>
    )
}