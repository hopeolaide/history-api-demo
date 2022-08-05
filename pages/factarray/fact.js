import Image from "next/image";
export default function Fact({ fact }) {
  return (
    <div>
      <h1>
        This is an individual Historical Fact. 
      </h1>
      <h2>Here are the details:</h2>
      <Image src={fact.photoUrl} alt="" />
      <p>Some stuff about the historical fact. </p>
      <p>
        Affiliation: { fact.affiliation }
      </p>
      <p>
        Place(s): { fact.place }
      </p>
    </div>
  )
}

export async function getStaticProps() {
const results = await fetch('https://api.si.edu/openaccess/api/v1.0/terms/:category').then(r => r.json());
// console.log(factlist)
return {
  props: {
    fact: results[0]
  }
}
}

export async function getStaticPaths() {
  const facts = await fetch('https://api.si.edu/openaccess/api/v1.0/terms/:category').then(r => r.json());
  return {
    paths: facts.map(fact => {
      return {
        params: { 
          factId: fact.name
        }
      }
    }),
    fallback: false
  }
}