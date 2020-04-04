import {Router, Request, Response} from 'express';
import db from '../database';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    db.query('SELECT * FROM client').then((client: any) => {
        res.send(client);
    })
    .catch((error: any) => {
        console.log(error);
    });
});

export default router;
