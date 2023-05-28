import { Search } from "react-bootstrap-icons";
import Card from "../(components)/Card";

export default function Cards(){
    return(
        <div className="w-full h-full">
            <div className="z-10 absolute right-4 left-4 top-4 flex items-center space-x-2 p-4 h-16 rounded-lg bg-primary text-background
            shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary transition-all duration-300">
                <div className="w-12 h-12 flex justify-center items-center"><Search size={30}/></div>
                <input type="text" className="w-full h-full bg-primary outline-none"/>
            </div>
            <div className="w-full h-full p-4 overflow-scroll z-0 flex flex-wrap items-star pt-24">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}