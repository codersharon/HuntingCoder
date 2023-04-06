// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  fs.readdir('blogdata', (err, data) => {
    console.log(data)
    res.status(200).json(data)
  })
}
