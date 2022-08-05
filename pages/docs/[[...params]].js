import { useRouter } from "next/router";


export default function Doc() {
  const router = useRouter()
  const { params = [] } = router.query
  console.log(params)

  if (params.length === 2) {
    return (
      <h1>
        Viewing a Fact Card list for {params[0]} and concept {params[1]} as a result of the query using the map API feature. 
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for {params[0]}</h1>
  }
  return <hi>Docs from Home Page</hi>
}