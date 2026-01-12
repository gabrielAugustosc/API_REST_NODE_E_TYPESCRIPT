import e, { Request, Response } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models/Cidade";
import { CidadesProvider } from "../../database/providers/cidades";


export interface IBodyProps extends Omit<ICidade, 'id'> {
  nome: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
  nome: yup.string().required().min(3).max(150),
})),
}));


export const create = async (req: Request<Record<string, never>, any, ICidade>, res: Response) => {
  const result = await CidadesProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
      default: result.message,
      }
    });
  }




  return res.status(StatusCodes.CREATED).json(result);
};