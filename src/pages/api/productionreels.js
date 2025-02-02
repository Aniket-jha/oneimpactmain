// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from '../../../lib/client'
import { allPrductionReelsQuery } from '../../../lib/queries'



export default async function handler(
  req,res
) {
  if (req.method === "GET"){
    const query  = allPrductionReelsQuery()
    const data = await client.fetch(query)
    res.status(200).json(data)
  }
  
}
