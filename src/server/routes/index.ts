import { Router } from 'express';

import { CidadesController } from './../controllers';  


const router = Router();

// Rota raiz para evitar erro 404 em /
router.get('/', (req, res) => {
  res.send('API está funcionando!');
});

router.get("/teste", (req, res) => {
  return res.send("Hello, Dev!");
});

router.post("/cidades", CidadesController.createValidation, CidadesController.create);
router.get("/cidades", CidadesController.getAllValidation, CidadesController.getAll);
router.get("/cidades/:id", CidadesController.getByIdValidation, CidadesController.getById);
router.put("/cidades/:id", CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete("/cidades/:id", CidadesController.deleteByIdValidation, CidadesController.deleteById);

export { router };