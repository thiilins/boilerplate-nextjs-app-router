import { useCallback } from 'react'
import { useLocalStorage } from 'usehooks-ts'
const useToggle = <T>([initialState, secondState]: T[]): [T, () => void] => {
  const [state, setState] = useLocalStorage<T>('theme', initialState)
  const toggle = useCallback(
    (): void =>
      setState((state: T) =>
        state === initialState ? secondState : initialState
      ),
    [initialState, secondState, setState]
  )
  return [state, toggle]
}
export default useToggle
