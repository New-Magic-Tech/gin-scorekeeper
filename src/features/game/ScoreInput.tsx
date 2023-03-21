import Stacked from "../../components/Stacked"
import Row from "../../components/Row"
import { useState } from "react"
import Button from "../../components/Button"


type Props = {

}

export default function ScoreInput(props : Props){
    //winnerChecked: false = playerOne; true = playerTwo
    const [winnerChecked, setWinnerChecked] = useState(false)
    const [handValue, setHandValue] = useState<undefined | number>()

    const handleWinnerToggle = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setWinnerChecked(e.target.checked)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        /*e.target.value === ""?
        setHandValue(0):*/
        setHandValue(parseInt(e.target.value))
    }

    const handleSubmit = () =>{

    }

    return (
        <Stacked>
           {/*
            //header
            //toggle winner
            //winner name
            //bg color 
            //label new hand score
            //score input
            //submit button
           */} 
           <h2 className="text-center">Score Your Hand</h2>

           <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input onChange={handleWinnerToggle} type="checkbox" checked={winnerChecked} className="sr-only peer"/>
                <div className="
                w-20 h-10 bg-blue rounded-full 
                peer peer-focus:ring-4 peer-focus:ring-gold peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-gold after:border-green after:border after:rounded-full after:h-9 after:w-9 after:transition-all
                peer-checked:bg-red"></div>
            </label>

            <label htmlFor='hand-score' className={`${winnerChecked?'bg-red':'bg-blue'}`}>{winnerChecked?'Player 2 Hand Score':'Player 1 Hand Score'}</label>
            <input placeholder="Score" type='number' id='hand-score' name='score' value={handValue?handValue: ''} onChange={handleChange}/>
           <Button onClick={handleSubmit}>Score Hand</Button>
        </Stacked>
    )
}

//w-11 h-6 after w-5 h-5 left-[2px]