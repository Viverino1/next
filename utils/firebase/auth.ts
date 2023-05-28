import app from "./config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

async function handleAuthClick(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        return user;
    })
    .catch((err) => {
        console.log(err);
    })
}

function handleSignOutClick(){
    auth.signOut().catch((err) => {
        console.log(err);
    })
}

export { handleAuthClick, handleSignOutClick, auth }