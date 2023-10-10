import GroupCreateController from "./adapter/GroupCreateController";
import GroupFindAllController from "./adapter/GroupFindAllController";
import UserCreateController from "./adapter/UserCreateController";
import UserFindAllController from "./adapter/UserFindAllController";
import GroupCreate from "./core/group/service/GroupCreate";
import GroupFindAll from "./core/group/service/GroupFindAll";
import UserCreate from "./core/user/service/UserCreate";
import UserFindAll from "./core/user/service/UserFindAll";
import app from "./external/api/Config";
import GroupRepositoryPrisma from "./external/prisma/GroupRepositoryPrisma";
import UserRepositoryPrisma from "./external/prisma/UserRepositoryPrisma";

app.get("/", () => "Rest API for Church ERP");

//Routes insert here
const userRepository = new UserRepositoryPrisma();

const userCreate = new UserCreate(userRepository);
new UserCreateController(app, userCreate);

const userFindAll = new UserFindAll(userRepository);
new UserFindAllController(app, userFindAll);

const groupRepository = new GroupRepositoryPrisma();

const groupCreate = new GroupCreate(groupRepository);
new GroupCreateController(app, groupCreate);

const groupFindAll = new GroupFindAll(groupRepository);
new GroupFindAllController(app, groupFindAll);

app.listen(process.env.PORT ?? 3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
