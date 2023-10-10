import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";

export default class UserFindAll implements UseCase<void, User[]> {
    constructor(readonly repository: UserRepository) {}

    async run(): Promise<User[]> {
        return await this.repository.findAll();
    }

}