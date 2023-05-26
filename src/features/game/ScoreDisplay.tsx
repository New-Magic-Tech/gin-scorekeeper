import Stacked from "../../components/Stacked"
import Row from "../../components/Row"
import SuitsFalling from "../animation/SuitsFalling"


import { useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store"


export default function ScoreDisplay(){
  
  const playerOneName = useAppSelector((state: RootState) => state.game.playerNames)[0]
  const playerTwoName = useAppSelector((state: RootState) => state.game.playerNames)[1]
  const playerOneScore = useAppSelector((state: RootState) => state.game.score)[0]
  const playerTwoScore = useAppSelector((state: RootState) => state.game.score)[1]
  const playAnimation = useAppSelector((state: RootState)=> state.game.playAnimation)
  //100 max width
  const playerOneWidth = playerOneScore>100?100:playerOneScore
  const playerTwoWidth = playerTwoScore>100?100:playerTwoScore

  


  

  
    return (
      <div className="relative">
        {playAnimation && <SuitsFalling/>}
        <Stacked>
          <p className="my-3 text-center text-2xl sm:text-3xl font-semibold text-blue">{playerOneName} Score:</p>
          <div style={{ width: `${(playerOneWidth * .9) + 10}%` }} className="bg-blue flex justify-center items-center transition-all duration-1000 ease-in-out">
            <div aria-label='Player One Score'>
                <p className='pt-2 pb-1 text-xl text-white'>{playerOneScore  }</p>
            </div>
          </div>
          <p className="my-3 text-center text-2xl sm:text-3xl font-semibold text-red">{playerTwoName} Score:</p>
          <div style={{ width: `${(playerTwoWidth * .9) + 10}%` }} className="bg-red flex justify-center items-center transition-all duration-1000 ease-in-out">
            <div aria-label='Player One Score'>
                <p className='pt-2 pb-1 text-xl text-white'>{playerTwoScore}</p>
            </div>
          </div>
        </Stacked>
      </div>
    )
}