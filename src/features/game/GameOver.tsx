import Section from "../../components/Section"
import Stacked from "../../components/Stacked"
import Button from "../../components/Button"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectGameOver, selectNames, selectScore, newGame } from "./gameSlice"
import { selectSignedIn } from "../auth/authSlice"

import { addGameToUser } from "../../utils/firebase"
import {pushGamesField} from "../auth/authSlice"

import { GameData } from "../../utils/InterfaceModels"


export default function GameOver (){
    const winnerIndex = useAppSelector(selectGameOver).winnerIndex
    const names = useAppSelector(selectNames)
    const winner = names[winnerIndex]
    const scores = useAppSelector(selectScore)

    const signedIn = useAppSelector(selectSignedIn)

    const dispatch = useAppDispatch()
    const handleNewGameClick = () =>{
        if (signedIn){
            const gameData:GameData = {
                winner: winner,
                player1Name:names[0],
                player2Name: names[1],
                player1Score: scores[0].toString(),
                player2Score: scores[1].toString(),
            }
            addGameToUser(gameData)
            dispatch(pushGamesField({gameData}))
        }
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