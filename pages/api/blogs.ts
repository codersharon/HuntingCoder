// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';

type Data = {
  name: string
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // fs.promises.readdir('blogdata', (err, data) => {
  //   if (err) {
  //     res.status(500).json({error: "Internal server error"})
  //   } else {
  //     data.forEach(item => {
  //       console.log(item)
  //       let allBlogs = [];
  //       fs.readFile(('blogdat/'+ item), (er, dat) => {
  //         if (er) {
  //           res.status(500).json({error: "Internal server error"})
  //         } else {
  //           allBlogs.push(dat)
  //         }
  //       })
  //       res.status(200).json(allBlogs)
  //     });
  //   }
  // })
// }


























export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(('blogdata/'+ item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  };
  res.status(200).json(allBlogs);
}