import Stacked from "../../components/Stacked"
import Row from "../../components/Row"
import { useState, useRef } from "react"
import Button from "../../components/Button"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { RootState } from "../../app/store"
import { increment, setPlayAnimation, setGameOver } from "./gameSlice"



export default function ScoreInput(){

    const scoreInputRef = useRef<HTMLInputElement>(null);
    
    const playerOneName = useAppSelector((state: RootState) => state.game.playerNames)[0]
    const playerTwoName = useAppSelector((state: RootState) => state.game.playerNames)[1]
    const playerOneScore = useAppSelector((state: RootState) => state.game.score)[0]
    const playerTwoScore = useAppSelector((state: RootState) => state.game.score)[1]
    
    //winnerChecked: false = playerOne; true = playerTwo
    const [winnerChecked, setWinnerChecked] = useState(false)
    const [handValue, setHandValue] = useState<undefined | number>()

    const dispatch = useAppDispatch()

    const handleWinnerToggle = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setWinnerChecked(e.target.checked)
        //focus on score input when winner is changed
        scoreInputRef.current?.focus()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setHandValue(parseInt(e.target.value))
    }



    const handleSubmit = () =>{
        if (handValue){
            const playerIndex = winnerChecked?1:0
            const handScore = handValue
            const newScore = (playerIndex===0?playerOneScore:playerTwoScore) + handScore
            dispatch(increment({playerIndex, handScore}))
            dispatch(setPlayAnimation(true))
            setTimeout(()=>{
                dispatch(setPlayAnimation(false))
                if (newScore>=100) dispatch(setGameOver({gameOver:true, winnerIndex: playerIndex}))
              }, 2000)
            setHandValue(0)
        }
    }

    return (
        <Stacked>
           <div className="flex flex-row justify-center p-2">
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input onChange={handleWinnerToggle} type="checkbox" checked={winnerChecked} className="sr-only peer"/>
                    <div className="
                    w-20 h-10 bg-blue rounded-full 
                    peer peer-focus:ring-4 peer-focus:ring-gold peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-gold after:border-green after:border after:rounded-full after:h-9 after:w-9 after:transition-all
                    peer-checked:bg-red"></div>
                </label>
           </div>
           <div className="flex flex-col items-center p-2">
                <label htmlFor='hand-score' className={`${winnerChecked?'bg-red':'bg-blue'} text-white text-center p-2 m-2 rounded-md text-2xl sm:text-3xl`}>{`${winnerChecked?playerTwoName:playerOneName} Hand Score`}</label>
                <input ref={scoreInputRef} className='m-2 pb-1 pt-2 pl-2 w-[120px] text-center text-3xl' placeholder="Score" type='number' id='hand-score' name='score' value={handValue?handValue: ''} onChange={handleChange}/>
                <Button onClick={handleSubmit}>Score Hand</Button>
           </div>
        </Stacked>
    )
}