import Elysia from "elysia";
import GroupFindAll from "../core/group/service/GroupFindAll";

export default class GroupFindAllController {
    constructor(readonly server: Elysia, readonly useCase: GroupFindAll) {
        server.get("/groups", async () => {
            return useCase.run();
        });
    }
}
