type User = {
    displayName: string,
    email: string,
    photoURL: string,
    uid: string,
}

type Contention = {
    name: string,
    subpoints: string[],
}

type Card = {
    title: string,
    contention: number,
    subpoint: number,
    evidence: string,
}

type Team = {
   teamName: string,
   owner: string,
   members: string[],
   teamID: string,
}

export type { User, Contention, Card, Team }