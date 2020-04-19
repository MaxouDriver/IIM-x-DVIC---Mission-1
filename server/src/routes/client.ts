
import {Router, Request, Response} from 'express';
import { getDb } from '../database';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log("client get");
 
    getDb().collection('client').find({}).toArray(function(err: any, result: any) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


router.post('/', (req: Request, res: Response) => {
    console.log("client post");
 
    getDb().collection('client').insertOne(req.body, function(err: any, result: any) {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/data/:id', (req: Request, res: Response) => {
    console.log("client data post");

    if (!req.params.id || !req.body.data) {
        res.send("Missing id or data");
        return;
    }

    
});

router.delete('/:id', (req: Request, res: Response) => {
    console.log("client delete");

    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
 
    getDb().collection('client').deleteOne({_id: req.params.id}, function(err: any, obj: any) {
        if (err) throw err;
        res.send("Document deleted");
    });
});

export default router;
