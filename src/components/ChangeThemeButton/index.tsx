'use client'
// import { useLocalStorage } from 'usehooks-ts'
import { Wrapper } from './styles'

import { DefaultTheme } from 'styled-components'
import { useCallback } from 'react'
import { dark } from '@/styles/themes/dark'
import useThemeCookie from '@/shared/hooks/useThemeCookie'
import { useLocalStorage } from 'usehooks-ts'
const ChangeThemeButton = () => {
  const [cookieTheme, setCookieTheme] = useThemeCookie()
  const [theme, setTheme] = useLocalStorage('theme', cookieTheme)
  // const [theme, setTheme] = useThemeStorage('dark')
  const changeTheme = () => {
    console.log('theme', theme, theme === 'light' ? 'dark' : 'light')
    console.log(
      'cookieTheme',
      cookieTheme,
      cookieTheme === 'light' ? 'dark' : 'light'
    )
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setCookieTheme(newTheme)
    return setTheme(newTheme)
  }
  return (
    <Wrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme !== 'light'}
          onChange={() => changeTheme()}
        />
        <span className="slider"></span>
      </label>
    </Wrapper>
  )
}

export default ChangeThemeButton
