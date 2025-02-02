// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from '../../../../lib/client'
import { pinDetailQuery} from '../../../../lib/queries'



export default async function handler(
  req,res
) {
  if (req.method === "GET"){
    const {id} = req.query;
    console.log(req.query.id)
    const query  = pinDetailQuery(id)
    const data = await client.fetch(query)

    res.status(200).json(data[0])
  }
  
}
