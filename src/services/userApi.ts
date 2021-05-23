import { UserInterface } from "../types";
import api from "./api";

export async function getUser(login: string) {
    try {
        const { data } = await api.get<UserInterface>(`/users/${login}`);
        return data;
    } catch (error) {
        throw new Error(error);
    }
} 