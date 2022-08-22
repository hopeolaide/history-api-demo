// import HistoryFactCard from "../component/HistoryFactCard/HistoryFactCard"

import Deck from "../component/Deck"
import Link from "next/link"

export default function About () {
  return (
    
    <div>
        <h1>
        Local Art History API
        </h1> 
        {/* <h2>
          Here is an example of a historical fact card:
        </h2> */}
        {/* <HistoryFactCard /> */}
        {/* <TestDeck /> */}
        {/* <TestMap /> */}
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
        <div >
          <p>
          <Deck />
          </p>
        </div>

    </div>
    
  )
}