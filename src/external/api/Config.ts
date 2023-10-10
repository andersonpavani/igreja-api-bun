import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger"

const app = new Elysia();

app.use(swagger());

export default app;