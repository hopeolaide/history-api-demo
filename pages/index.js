import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SearchBar from '../component/SearchBar'
import Image from 'next/image'

export default function Home({results}) {

// export default function Home({results}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Local Art History API</title>
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
              <Link href='/map'>
                <a> Art History Map</a>
              </Link>

            </div>
            <div>
                <Link href='/api'>
                <a>API</a> 
                </Link> 
            </div>
          </ul>
        </nav>
        <h1 className={styles.title}>
          Local Art History API project 
        </h1>
        {/* <h2>This is the home page</h2>  */}
        <SearchBar/>

        {/* <TestDeck /> */}

        <h2>ADA C17 Capstone Project </h2>
        {/* <h3>Hope Wilson </h3> */}

        <div >
         {/* <Deck /> */}
        </div>
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> */}

{/* 
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
           
          </a> */}
        {/* </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}


// export async function getServerSideProps(){
//   console.log('Hello,Hello, Hello')

//   const res = await fetch('https://api.si.edu/openaccess/api/v1.0/search' + process.env.APIKEY)
//   const data = await res.json()
//   console.log(data)

//   return {
//     props: {
//       results: data
//     }
//   }
// }