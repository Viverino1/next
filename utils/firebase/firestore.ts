import { CollectionReference, DocumentData, addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import app from "./config";
import { Team, User } from "../types";

const db = getFirestore(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
}

const usersCol = createCollection<User>('users');
const teamsCol = createCollection<Team>('teams');

function saveUser(user:User){
    if(!user.uid){return;}
    
    const userRef = doc(usersCol, user.uid);
    setDoc(userRef, user, {merge: true});
}

function createTeam(team: Team){
    addDoc(teamsCol, team).then((result) => {
        const newTeam: Team = Object.create(team);
        newTeam.teamID = result.id;
        return newTeam;
    })
}


export default db;

export { saveUser, createTeam }