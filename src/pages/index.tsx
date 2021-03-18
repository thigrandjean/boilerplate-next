import Head from 'next/head'
// import styles from '../styles/Home.module.css'

type Props = {
  title: string
}
export default function Home({ title = 'react avançado' }: Props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
