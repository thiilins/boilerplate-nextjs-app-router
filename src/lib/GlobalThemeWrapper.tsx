'use client'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import { dark, light } from '@styles/themes'
import GlobalStyle from '@styles/global'
export default function GlobalThemeWrapper({ children }: ChildProps) {
  const [theme] = useLocalStorage('theme', dark)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
