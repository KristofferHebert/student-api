import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

import {middleware} from '../../../utils/middleware'
import * as db from '../../../utils/db'

const cors = Cors({
    methods: ['GET', 'POST', 'DELETE', 'OPTION', 'HEAD'],
})


const GET = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
      } = req

    try {
        res.statusCode = 200
        return res.json({ message: 'success', data: db.get(id) })

    } catch (error){
        res.statusCode = 400
        res.json({ message: 'Failed to get' + id, error })
    }

}

const DELETE = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {
            query: { id },
          } = req

         res.statusCode = 202
         return res.json({ message: 'success', data: db.destroy(id) })
    } catch(error) {
        res.statusCode = 400
        res.json({ message: 'Failed to put', error })
    }

}

const POST = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let body = req.body
        body = db.create(JSON.parse(body))

         res.statusCode = 201
         return res.json({ message: 'success', data: body })
    } catch(error) {
        res.statusCode = 400
        res.json({ message: 'Failed to post', error })
    }

}

export default async(req: NextApiRequest, res: NextApiResponse) => {
    await middleware(req, res, cors)

    switch (req.method) {
        case 'GET':
            GET(req, res)
            break
        case 'POST':
            POST(req, res)
            break 
        case 'DELETE':
            DELETE(req, res)
            break   
        default:
            break;
    }
  }
  