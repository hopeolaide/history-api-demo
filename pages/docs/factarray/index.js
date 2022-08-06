
export default function FactList({ factarray }) {
  // const factarray = 
  return (
    <div>
      <h1>
        Location-based fact list
      </h1>
      <h2>Historical Fact List</h2>
      <p>This is a list of json objects</p>
      <ul>
        {factarray.map(fact => {
          return (
            <li key={fact._id}>
              {fact.title}
            </li>
          )
        })}
        <li>Fact #1</li>
        <li>Fact #2</li>
        <li>Fact #3</li>
        <li>Fact #4</li>
        <li>Fact #5</li>
      </ul>
      
    </div>
  );
}

export async function getStaticProps() {
  const factarray = await fetch('https://api.si.edu/openaccess/api/v1.0/terms/:category').then(r => r.json());
  // console.log(factlist)
  return {
    props: {
      factarray
    }
  }
}