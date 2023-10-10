import Elysia from "elysia";
import UserCreate from "../core/user/service/UserCreate";

export default class UserCreateController {
    constructor(readonly server: Elysia, readonly useCase: UserCreate) {
        server.post('/users', async ({ body }) => {
            const { name, email, password } = body as any;
            const user = await useCase.run({ name, email, password });

            return new Response(JSON.stringify(user), { status: 201})
        })
    }
}