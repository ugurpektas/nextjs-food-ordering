import dbConnect from '../../../util/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json(user);
      } catch (error) {
        res.status(405).json(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
