export type IndexCard = {
    id: string,
    term1: string,
    term2: string,
    difficulty: Difficulty,
}

export enum Difficulty {
    EASY,
    MEDIUM,
    HARD,
}