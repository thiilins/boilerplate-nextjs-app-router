/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR'
  }
}

module.exports = nextConfig
