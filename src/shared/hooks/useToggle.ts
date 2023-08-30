import { useCallback, useState } from 'react'
const useToggle = <T>([initialState, secondState]: T[]): [T, () => void] => {
  const [state, setState] = useState<T>(initialState)
  const toggle = useCallback(
    (): void =>
      setState((state: T) =>
        state === initialState ? secondState : initialState
      ),
    [initialState, secondState]
  )
  return [state, toggle]
}
export default useToggle
