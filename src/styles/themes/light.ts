import { defaultTheme } from './defaults'
import { DefaultTheme } from 'styled-components'

export const light: DefaultTheme = {
  ...defaultTheme,
  title: 'light',
  colors: {
    ...defaultTheme.colors,
    accent: '#2B215A',
    primary: '#FFFFFF',
    secondary: '#CCD6F6',
    primaryText: '#11071F',
    secondaryText: '#2B215A'
  }
}
