import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


interface GameState {
  userDoc: {
    uid: Number,
    userName: string,
    pairings:[]
  } | null;
  signedIn: boolean;
}

interface UserDoc {
    uid: Number,
    userName: string,
    pairings:[]
}

const initialState: GameState = {
  userDoc:null,
  signedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDoc: (state, action: PayloadAction<{userDoc: UserDoc | null }>) => {
        state.userDoc = action.payload.userDoc
    },
        setSignedIn: (state, action: PayloadAction<boolean>) =>{
            state.signedIn = action.payload
        }
    },
  })
  
export const {} = authSlice.actions

export const selectUserDoc = (state: RootState) => state.auth.userDoc


export default authSlice.reducer 