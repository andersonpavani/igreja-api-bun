import { PrismaClient } from "@prisma/client";
import Group from "../../core/group/model/Group";
import GroupRepository from "../../core/group/service/GroupRepository";

export default class GroupRepositoryPrisma implements GroupRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    create(group: Group): Promise<Group> {
        return this.prisma.group.create({ data: group });
    }

    findByName(name: string): Promise<Group | null> {
        return this.prisma.group.findUnique({
            where: { name },
        });
    }

    findAll(): Promise<Group[]> {
        return this.prisma.group.findMany();
    }
}
