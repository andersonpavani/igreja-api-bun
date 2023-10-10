import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";

type Input = {
    name: string;
    email: string;
    password: string;
};

export default class UserCreate implements UseCase<Input, User> {
    constructor(private readonly repository: UserRepository) {}

    async run(data: Input): Promise<User> {
        const { name, email, password } = data;

        const userExists = await this.repository.findByEmail(email);

        if (userExists) {
            throw new Error("User already exists");
        }

        return await this.repository.create({ name, email, password });
    }
}
