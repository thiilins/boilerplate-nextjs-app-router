'use client'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function useThemeCookie(
  defaultTheme: string = 'dark'
): [ThemeTypes, TSetState<ThemeTypes>] {
  const [theme, setTheme] = useState<ThemeTypes>(
    () => (Cookies.get('theme') as ThemeTypes) ?? defaultTheme
  )

  useEffect(() => {
    Cookies.set('theme', theme, { expires: 365 })
  }, [theme])
  useEffect(() => {
    const cookie = Cookies.get('theme')
    console.log('cookie', cookie)
  }, [])

  return [theme, setTheme]
}
