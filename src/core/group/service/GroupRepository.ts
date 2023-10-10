import Group from '../model/Group';

export default interface GroupRepository {
    create(group: Group): Promise<Group>;
    findByName(name: string): Promise<Group | null>;
    findAll(): Promise<Group[]>;
}