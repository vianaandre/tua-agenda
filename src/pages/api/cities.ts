import { NextApiRequest, NextApiResponse } from 'next';
import cities from 'services/mock/cities.json';

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(cities);
}

export default handler;
