import type {User} from "./auth-types"

const users: User[] = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
];

export function findUserById(id: number): User | undefined {
    return users.find((user) => user.id === id);
}