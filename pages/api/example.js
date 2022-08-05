
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send("hello world")
    res.status(200).json({name: req.query.id,
                          place: 'string value city, state, etc' 
  })
//Handle additional HTTP methods
  // } else {
    // req.query

  } else {
    res.status(400)
  }
}
