import styles from './HistoryFactCard.module.css'
import ViewSource from '../ImageComponent/ViewSource'
import Image from 'next/image'

export default function HistoryFactCard () {
  return <div className={styles.card}>
    <h2>
      History Card  - Presentational Component 
    </h2>
    <p>
      <p>
        Description: lorem ipsum etc 
      </p>
      <p>
        Place: Baltimore, MD
      </p>
      <p>
      Source: Smithsonian Open Access
      </p>

      
      <ViewSource />
      <Image />
    </p>
  </div>
}