"use client";
import { handleAuthClick, handleSignOutClick } from "@/utils/firebase/auth"
import { useAppSelector } from "@/utils/redux/hooks";
import { useRouter } from "next/navigation";
import { BoxArrowLeft, Google } from "react-bootstrap-icons";


export default function Auth(){
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const user = useAppSelector((state) => state.auth.user);
    const router = useRouter();
    if(isLoggedIn){
        return(
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col space-y-4 w-96 h-fit rounded-xl p-4 bg-secondary shadow-primary hover:shadow-primary shadow-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center items-center w-full text-accent text-xl">Hi, {user.displayName}</div>
                    <div className="w-full h-px bg-accent"/>
                    <div className="relative flex items-center text-background">
                        <div className="absolute left-3"><BoxArrowLeft size={40}/></div>
                        <button onClick={handleSignOutClick} className="w-full h-16 rounded-lg bg-primary text-xl">Log Out</button>
                    </div>
                </div>         
            </div>
        )
    }else{
        return(
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col space-y-4 w-96 h-fit rounded-xl p-4 bg-secondary shadow-primary hover:shadow-primary shadow-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center items-center w-full text-accent text-xl">Log In To Your Account</div>
                    <div className="w-full h-px bg-accent"/>
                    <div className="relative flex items-center text-background">
                        <div className="absolute left-3"><Google size={40}/></div>
                        <button onClick={() => {handleAuthClick().then(() => {router.push("/profile")})}}
                        className="w-full h-16 rounded-lg bg-primary text-xl">Login With Google</button>
                    </div>
                </div>         
            </div>
        )
    }
}