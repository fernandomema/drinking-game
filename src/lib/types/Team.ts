import { Player } from "$lib/types/Player";

export type Team = {
    name: string;
    color: string;
    players: Player[];
}