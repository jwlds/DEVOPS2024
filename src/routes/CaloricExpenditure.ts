import express from 'express'
import CaloricExpenditureController from '../controllers/CaloricExpenditureController';

const router = express.Router();


router.post('/',CaloricExpenditureController.calculate);


export = router;