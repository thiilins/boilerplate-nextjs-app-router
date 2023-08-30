'use client'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import themes from '@styles/themes'
import GlobalStyle from '@styles/global'
import cookie from 'cookie'
import useThemeCookie from '@/shared/hooks/useThemeCookie'
import { GetServerSideProps } from 'next'
interface IProps extends TChildProps {
  ssrCookieTheme: unknown
}
export default function GlobalThemeWrapper({
  children,
  ssrCookieTheme
}: IProps) {
  const [cookieTheme] = useThemeCookie()
  const [theme] = useLocalStorage<ThemeTypes>(
    'theme',
    ssrCookieTheme as ThemeTypes
  )

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
