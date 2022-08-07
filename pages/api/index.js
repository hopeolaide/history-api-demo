// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { facts } from '../../data/facts'

export default function handler (req, res) {
    if (req.method === 'GET') {
        res.status(200).json(facts)
    } 
    // else if 
    // res.send("hello world")
    // res.status(200).json(facts)
}
