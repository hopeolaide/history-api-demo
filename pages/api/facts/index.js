// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { facts }from '../../../data/facts'

export default function handler (req, res) {
  // res.send("hello world")
  res.status(200).json(facts)
}
// This is your template. 