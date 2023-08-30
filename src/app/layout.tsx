import type { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'
import GlobalThemeWrapper from '@/lib/GlobalThemeWrapper'
import { cookies } from 'next/headers'
export const metadata: Metadata = {
  title: 'Boilerplate Next + Typescript',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
  icons: {
    icon: '/assets/icons/192x192.png'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}
export default function RootLayout({ children }: TChildProps) {
  const theme = cookies().get('theme')
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <>
            <GlobalThemeWrapper ssrCookieTheme={theme?.value ?? 'dark'}>
              {children}
            </GlobalThemeWrapper>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
