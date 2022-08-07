import { useState } from 'react'

export default function FactsPage() {
  const [facts, setFacts] = useState([])
  // const [fact, setFact] = useState([])
  
  const fetchFacts = async () => {
    // const response = await fetch('/api/facts')
    const response = await fetch('/api/facts')
    const data = await response.json()
    setFacts(data)
  }

  const fetchFactById = async factId => {
    console.log(factId)
    const response = await fetch(`/api/facts/${factId}`, {
      method: 'GET',
    })
    const data = await response.json()
    console.log(data)
    // fetchFactById()
  }

  return (
    <>
    <div>
      <button 
        onClick={fetchFacts} 
        style={{width:"25%"}}>Load Historical Facts</button>   
        {facts.map(fact => { 
        return (
          <div key={fact.id}>
            <div>  
            {fact.id} . {fact.description}
            </div>
            {/* <button onClick={fetchFactById}>Learn more...</button> */}
            <button 
              onClick= {() => fetchFactById(fact.id)} 
              style={{width:"20%"}}>Learn more...</button>
          
          </div>)})
      }
    </div>
    </>
  )
}
