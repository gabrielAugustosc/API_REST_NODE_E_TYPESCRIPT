import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


export interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().moreThan(0).default(1),
    limit: yup.number().moreThan(0).default(10),
    filter: yup.string().default(''),
  })),
}));


export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado");
};