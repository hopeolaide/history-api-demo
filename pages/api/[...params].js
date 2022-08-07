// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler (req, res) {

  const params = req.query.params
  console.log(params)
  res.status(200).json(params)
}
// This is your template.

//Single square brackets are for catch all routes

// OPTIONAL CATCH ALL ROUTES: Double square brackets are for optional catch all 
// routes and would require you to delete the index.js 
// file in the api folder. 