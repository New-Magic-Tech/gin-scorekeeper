import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


interface GameState {
  score: [number, number],
  playerNames: [string, string],
  playAnimation: boolean,
  gameOver: {
    gameOver: boolean,
    winnerIndex: number,
  }
}

const initialState: GameState = {
  score: [0,0],
  playerNames: ['Blue Player', 'Red Player'],
  playAnimation: false,
  gameOver: {
    gameOver: false,
    winnerIndex: 0,
  }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
      increment: (state, action: PayloadAction<{playerIndex: number, handScore: number}>) => { //payload [player index, handscore]
        state.score[action.payload.playerIndex ] += action.payload.handScore
      },
      setName: (state, action: PayloadAction<{playerIndex: number, newName: string}>) =>{
        state.playerNames[action.payload.playerIndex] = action.payload.newName
      },
      setPlayAnimation: (state, action: PayloadAction<boolean>) =>{
        state.playAnimation = action.payload
      },
      setGameOver: (state, action: PayloadAction<{gameOver:boolean, winnerIndex: number}>) =>{
        state.gameOver = action.payload
      },
      newGame: (state) =>{
        state.score = [0,0]
        state.gameOver.gameOver = false
      }
    },
  })
  
export const { increment, setName, setPlayAnimation, setGameOver, newGame} = gameSlice.actions

export const selectScore = (state: RootState) => state.game.score
export const selectNames = (state: RootState) => state.game.playerNames
export const selectPlayAnimation = (state: RootState) => state.game.playAnimation
export const selectGameOver = (state: RootState) => state.game.gameOver


export default gameSlice.reducer 