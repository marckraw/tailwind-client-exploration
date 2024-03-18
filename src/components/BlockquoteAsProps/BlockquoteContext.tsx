'use client'

import {createContext} from 'react'

export const BlockquoteContext = createContext({})

export default function BlockquoteContextProvider(
  {
    children, value
  }: {
    children: React.ReactNode;
    value: any;
  }) {
  return <BlockquoteContext.Provider value={value}>{children}</BlockquoteContext.Provider>
}