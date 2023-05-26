import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

import { GameData } from "../../utils/InterfaceModels"



interface GameState {
  userDoc: {
    uid: Number,
    userName: string,
    games:GameData[]
  } | null;
  signedIn: boolean;
  displayAuthModal: boolean;
}

interface UserDoc {
    uid: Number,
    userName: string,
    games:GameData[]
}

const initialState: GameState = {
  userDoc:null,
  signedIn: false,
  displayAuthModal: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDoc: (state, action: PayloadAction<{userDoc: UserDoc | null }>) => {
        state.userDoc = action.payload.userDoc
    },
        pushGamesField: (state, action: PayloadAction<{gameData: GameData}>) => {
            if (state.userDoc){
                state.userDoc.games = [...state.userDoc.games, action.payload.gameData]
            }
        },
        setSignedIn: (state, action: PayloadAction<boolean>) =>{
            state.signedIn = action.payload
        },
        displayAuthModal: (state, action: PayloadAction<boolean>) =>{
            state.displayAuthModal = action.payload
        }
    },
  })
  
export const {setUserDoc, setSignedIn, displayAuthModal, pushGamesField} = authSlice.actions

export const selectUserDoc = (state: RootState) => state.auth.userDoc
export const selectSignedIn = (state: RootState) => state.auth.signedIn
export const selectDisplayAuthModal = (state: RootState) => state.auth.displayAuthModal




export default authSlice.reducer 