/*eslint-disable no-unused-vars*/
'use client'

import { createContext, Dispatch, useContext, useReducer } from 'react'
import { reducer } from './reducer'
import { Action, initialState, State } from './types'

interface TopContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export const TopContext = createContext<TopContextProps | undefined>(undefined)

// Custom hook
export function useTopContext() {
  const context = useContext(TopContext)

  if (!context) {
    throw new Error('useTopContext must be used within a TopContextProvider')
  }

  return context
}

export default function TopContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TopContext.Provider value={{ state, dispatch }}>
      {children}
    </TopContext.Provider>
  )
}
