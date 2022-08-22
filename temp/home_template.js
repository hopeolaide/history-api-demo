import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SearchBar from '../component/SearchBar'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Local History API</title>
        <meta name="ADA C17 - Hope Wilson - Capstone Project" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul>
            <div>
              <Link href='/'>
                <a>home</a>
              </Link>
            </div>
            <div>
              <Link href='/about'>
                <a> about</a>
              </Link>

            </div>
            <div>
                <Link href='/support'>
                <a>API</a> 
                </Link> 
            </div>
          </ul>
        </nav>
        <h1 className={styles.title}>
          Local History API project 
        </h1>
        {/* <h2>This is the home page</h2>  */}
        <SearchBar/>

        <h2>This is an ADA C17 Capstone Project </h2>
        <h3>Hope Wilson </h3>

        <p className={styles.description}>
          Visit the historical fact map {' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}