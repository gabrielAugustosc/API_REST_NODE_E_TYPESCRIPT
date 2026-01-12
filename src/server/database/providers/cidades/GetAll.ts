import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';
import { ICidade } from '../../models/Index';



export const getAll = async (page: number, limit: number, filter: string, id = 0): Promise<ICidade[] | Error> => {
    try {
        const result = await Knex(ETableNames.CIDADE)
        .select('*')
            .where('id', Number(id))
            .orWhere('nome', 'like', `%${filter}%`)
            .limit(limit)
            .offset((page - 1) * limit);
        
        if (id > 0 && result.every(item => item.id !== id)) {
            const rwesultById = await Knex(ETableNames.CIDADE)
                .select('*')
                .where('id', id)
                .first();
            if (rwesultById) return [...result, rwesultById];
        }

        return result;
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');  
    }   
};       