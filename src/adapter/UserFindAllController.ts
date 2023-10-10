import Elysia from "elysia";
import UserFindAll from "../core/user/service/UserFindAll";

export default class UserFindAllController {
    constructor(readonly server: Elysia, readonly useCase: UserFindAll) {
        server.get('/users', async () => {
            return useCase.run();
        })
    }
}