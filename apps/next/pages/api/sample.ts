import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      return await getHandle(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
  // クエリを受け取る時
  const query = req.query;
  console.log(query);

  return res.status(200).json({ name: 'John Doe' });
}
