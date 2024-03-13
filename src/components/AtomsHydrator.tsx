'use client'
import type {ReactNode} from 'react'
import type {WritableAtom} from 'jotai'
import {useHydrateAtoms} from 'jotai/utils'

export const AtomsHydrator = (
  {
    atomValues,
    children,
  }: {
    atomValues: Iterable<
      readonly [WritableAtom<unknown, [any], unknown>, unknown]
    >
    children: ReactNode
  }) => {
  useHydrateAtoms(new Map(atomValues))
  return children
}