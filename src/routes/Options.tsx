import Section from "../components/Section"
import Stacked from "../components/Stacked"

import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../app/hooks"
import { selectNames, setName } from "../features/game/gameSlice"


export default function Options() {
    const dispatch = useAppDispatch()
    const playerNames = useAppSelector(selectNames)
    const [player1Name, setPlayer1Name] = useState(playerNames[0])
    const [player2Name, setPlayer2Name] = useState(playerNames[1])
    

    return(
        <Section>
            <Stacked>
                <h1 className="text-darkGreen text-3xl text-decoration: underline">Options</h1>
                <label htmlFor="player1Name" className="text-darkGreen text-xl">Blue Player Name</label>
                <input id="player1Name" className="text-blue text-xl" type="text" value={player1Name} onChange={(e)=>setPlayer1Name(e.target.value)} onBlur={()=>dispatch(setName({playerIndex:0, newName:player1Name}))}/>
                <label htmlFor="player2Name" className="text-darkGreen text-xl">Red Player Name</label>
                <input id="player2Name" className="text-red text-xl" type="text" value={player2Name} onChange={(e)=>setPlayer2Name(e.target.value)} onBlur={()=>dispatch(setName({playerIndex:1, newName:player2Name}))}/>
            </Stacked>
        </Section>
    )

}