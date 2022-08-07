import { facts } from '../../../data/facts'

export default function handler (req, res) {
  const { factId } = req.query

  if(req.method === 'GET') {
    console.log(factId)
    const fact = facts.find((fact) => fact.id === parseInt(factId))
    res.status(200).json(fact)
  }
}