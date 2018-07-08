// Test
import express from 'express';
const router = express.Router();
import {ChannelResource} from '../Models/db/Arcadia';

router.get('/',  (req, res) =>{
    console.log("Start");
    ChannelResource.findAll()
        .then(data => {
            res.json({msg:data});
        })
        .catch(error => {
            res.json({error:error});
        });
});

export default router;