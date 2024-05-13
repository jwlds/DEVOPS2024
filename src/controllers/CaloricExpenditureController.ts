import {NextFunction, Request, Response} from 'express';
import CaloricExpenditureService from '../services/CaloricExpenditureService';
import IPersonDTO from '../models/IPersonDTO';
import ApiResponse from '../models/ApiResponse';

class CaloricExpenditureController {
    async calculate(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body as IPersonDTO;
            const caloricExpenditureService = new CaloricExpenditureService()
            const caloricExpenditure = caloricExpenditureService.calculate(data);

            const response: ApiResponse = { 
                status: 'success',
                message: 'Caloric Expenditure calculated successfully.',
                payload: [caloricExpenditure] ,
            };

            return res.status(200).json(response);
        } catch (err) {
            
            let errorMessage = 'Internal server error.';
            if (err instanceof Error) {
                errorMessage = err.message;
            }
        
            const errorResponse: ApiResponse = { 
                status: 'error',
                message: errorMessage,
                payload: []
            };
        
            return res.status(500).json(errorResponse);
        }
        
    }
}

export default new CaloricExpenditureController();
