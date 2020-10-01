import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'

import {middleware} from '../../../utils/middleware'
import * as db from '../../../utils/db'

const cors = Cors({
    methods: ['GET', 'HEAD'],
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await middleware(req, res, cors)

    res.statusCode = 200
    res.json({ message: 'success', data: db.getAll() })
  }
  