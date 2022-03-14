import { Request, Response, Router } from 'express';
import fetch from 'node-fetch';

interface User {
  id: string,
  name: string,
  email: string
}

const router = Router();

/* GET home page. */
router.get('/', async (req: Request, res: Response) => {
  const response = await fetch('http://192.168.64.4:3000/users');
  const users = await response.json() as User[];
//   console.log(users);
  res.render('index', { title: 'Express', users: users });
});

export default router;