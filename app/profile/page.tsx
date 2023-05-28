"use client";

import { useAppSelector } from "@/utils/redux/hooks";
import { PlusLg } from "react-bootstrap-icons";

export default function Profile(){
    const contentions = useAppSelector((state) => state.team.contentions);

    return(
        <div className="flex flex-col space-y-4 w-full h-full p-4 text-accent">
            <div className="flex flex-col space-y-4 w-full h-fit p-4 rounded-lg bg-secondary shadow-lg shadow-primary">
                <div className="text-3xl font-bold">Case Options</div>
                {contentions.map((contention, index) => (
                    <div className="flex flex-col space-y-4 w-full h-fit">
                        <div className="w-full h-fit">
                            <div>Contention {index + 1}</div>
                            <input type="text" defaultValue={contention.name} className="h-10 w-full p-2 rounded-lg bg-background outline-none
                            hover:shadow-lg hover:shadow-primary transition-all duration-300"/>
                        </div>

                        <div className="flex flex-col space-y-4 pl-16 w-full h-fit">

                            {contention.subpoints.map((subpoint, index) => (
                                <div className="w-full h-fit">
                                    <div>Subpoint {index + 1}</div>
                                    <input type="text" defaultValue={subpoint} className="h-10 w-full p-2 rounded-lg bg-background outline-none
                                    hover:shadow-lg hover:shadow-primary transition-all duration-300"/>
                                </div>
                            ))}

                            <button className="flex justify-center items-center space-x-4 h-10 p-4 w-fit rounded-lg bg-primary text-secondary outline-none
                            hover:shadow-lg hover:shadow-primary transition-all duration-300">
                                <PlusLg size={20}/>
                                <div>Add Subpoint</div>
                            </button>
                        </div>
                    </div>
                ))}
                <button className="flex justify-center items-center space-x-4 h-10 p-4 w-fit rounded-lg bg-primary text-secondary outline-none
                hover:shadow-lg hover:shadow-primary transition-all duration-300">
                    <PlusLg size={20}/>
                    <div>Add Contention</div>
                </button>
                <button className="flex justify-center items-center h-10 w-32 rounded-lg bg-primary text-secondary outline-none
                hover:shadow-lg hover:shadow-primary transition-all duration-300">Save</button>
            </div>

            
        </div>
    )
}