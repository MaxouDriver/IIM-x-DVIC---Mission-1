
import {Router, Request, Response} from 'express';
import { getDb } from '../database';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log("project get");
 
    getDb().collection('project').find({}).toArray(function(err: any, result: any) {
        if (err) throw err;
        res.send(result);
    });
});


router.post('/', (req: Request, res: Response) => {
    console.log("project post");
 
    getDb().collection('project').insertOne(req.body, function(err: any, result: any) {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/data/:id', (req: Request, res: Response) => {
    console.log("project data post");

    if (!req.params.id || !req.body.data) {
        res.send("Missing id or data");
        return;
    }

    
});

router.delete('/:id', (req: Request, res: Response) => {
    console.log("project delete");

    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
 
    getDb().collection('project').deleteOne({_id: req.params.id}, function(err: any, obj: any) {
        if (err) throw err;
        res.send("Document deleted");
    });
});

export default router;
