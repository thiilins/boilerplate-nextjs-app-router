import { defaultTheme } from './defaults'
import { DefaultTheme } from 'styled-components'

export const dark: DefaultTheme = {
  ...defaultTheme,
  title: 'dark',
  colors: {
    ...defaultTheme.colors,
    accent: '#9857D3',
    primary: '#11071F',
    secondary: '#2B215A',
    primaryText: '#FFFFFF',
    secondaryText: '#CCD6F6'
  }
}
