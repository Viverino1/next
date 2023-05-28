"use client";
import { auth } from "@/utils/firebase/auth";
import { clearUser, setUser } from "@/utils/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import Link from "next/link";
import { ReactElement, useEffect } from "react"
import { CardHeading, PersonFill } from "react-bootstrap-icons"
import SideSelector from "./SideSelector";
import TopicSelector from "./TopicSelector";
import { saveUser } from "@/utils/firebase/firestore";

export default function Navbar(){
    const user = useAppSelector((state) => state.auth.user);
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    return(
        <div className="group flex flex-col justify-between transition-all duration-300 w-21 hover:w-80 h-screen p-2 bg-accent text-background text-lg">
            <GetData/>
            <div className="flex flex-col space-y-2">
                <NavbarElement text="Debate Tool V1" icon={<img src="./favicon.ico"/>} link="/"/>
                <NavbarElement text="Cards" icon={<CardHeading size={40}/>} link="/cards"/>
            </div>

            <div className="flex flex-col space-y-2">
                <TopicSelector/>
                <SideSelector/>
                <NavbarElement
                text={isLoggedIn? user.displayName : "Log In"} 
                icon={isLoggedIn? <img src={user.photoURL} alt={user.displayName}/> : <PersonFill size={40}/>} 
                link={isLoggedIn? "/profile" : "/auth"}/>
            </div>
        </div>
    )
}

function NavbarElement(props: {text: string, icon: ReactElement, link: string}){
    return(
        <Link className="relative flex justify-center items-center space-x-4 w-full h-17
        rounded-lg border-2 group-hover:border-primary border-transparent 
        transition-all duration-300
        bg-accent hover:bg-primary"
        href={props.link}>
            <div className="absolute top-2 left-2 bottom-2 flex justify-center items-center w-12 h-12 rounded-full overflow-clip">{props.icon}</div>
            <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 whitespace-nowrap">{props.text}</div>
        </Link>
    )
}

function GetData(){
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    
    auth.onAuthStateChanged((user) => {
        if(user && user.displayName && user.email && user.photoURL){
            dispatch(setUser({
                displayName: user.displayName, 
                email: user.email,
                photoURL: user.photoURL, 
                uid: user.uid,
            }));
        }else{
            dispatch(clearUser());
        }
    })

    useEffect(() => {
        saveUser(user);
    }, [user])

    return null;
}