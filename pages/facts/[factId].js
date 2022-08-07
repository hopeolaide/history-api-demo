import { facts } from "../../data/facts"

export default function Fact({ fact }) {
  return (
    <div>
      {fact.id}. {fact.description}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { factId: '1' } },
      { params: { factId: '2' } },
      { params: { factId: '3' } },
      { params: { factId: '4' } },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const { factId } = params

  const fact =  facts.find((fact) => fact.id === parseInt(factId))
  console.log(fact)

  // Don't do this:
  // const response = await fetch(`http:localhost:300/api/facts/${factId}`)
  // const data = await response.json()
  // Why? We should not call our own API routes for pre-rendering content. 
  // It causes delays.

  return {
    props: {
      fact, 
    },
  }
} 