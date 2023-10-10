import UseCase from "../../shared/UseCase";
import Group from "../model/Group";
import GroupRepository from "./GroupRepository";

export default class GroupFindAll implements UseCase<void, Group[]> {
    constructor(readonly repository: GroupRepository) {}

    async run(): Promise<Group[]> {
        return await this.repository.findAll();
    }

}