import type { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'
import GlobalThemeWrapper from '../lib/GlobalThemeWrapper'

export const metadata: Metadata = {
  title: 'Boilerplate Next + Typescript',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
  icons: {
    icon: '/assets/icons/192x192.png'
  }
}
export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>{children}</GlobalThemeWrapper>{' '}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
