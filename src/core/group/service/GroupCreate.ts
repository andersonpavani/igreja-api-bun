import UseCase from "../../shared/UseCase";
import Group from "../model/Group";
import GroupRepository from "./GroupRepository";

type Input = {
    name: string;
};

export default class GroupCreate implements UseCase<Input, Group> {
    constructor(private readonly repository: GroupRepository) {}

    async run(data: Input): Promise<Group> {
        const { name } = data;

        const groupExists = await this.repository.findByName(name);

        if (groupExists) {
            throw new Error("Group already exists");
        }

        return await this.repository.create({ name });
    }
}
