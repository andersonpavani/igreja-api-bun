import Elysia from "elysia";
import GroupCreate from "../core/group/service/GroupCreate";

export default class GroupCreateController {
    constructor(readonly server: Elysia, readonly useCase: GroupCreate) {
        server.post("/groups", async ({ body }) => {
            const { name } = body as any;
            const group = await useCase.run({ name });

            return new Response(JSON.stringify(group), { status: 201 });
        });
    }
}
