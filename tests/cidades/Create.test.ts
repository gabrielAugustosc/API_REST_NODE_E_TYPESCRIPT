import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe("Criar uma nova cidade", () => {
    it("Criar registro", async () => {

       const res1 = await testServer
       .post("/cidades")
       .send({ nome: "Rio de Janeiro" });
           

        expect(res1.status).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual("numvber");
    
    });
    it("Não pode criar registro com nome muito curto", async () => {

       const res1 = await testServer
       .post("/cidades")
       .send({ nome: "Ri" });
           

        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty("errors.body.nome");
    
    });
});