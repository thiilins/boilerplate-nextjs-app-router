import Head from 'next/head'
import Main from '@/components/Main'
interface IProps {
  title?: string
}
export default function Home() {
  return (
    <>
      <Head>
        <title> "HELLO WORLD"</title>
      </Head>
      <Main />
    </>
  )
}
