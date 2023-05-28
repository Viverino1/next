"use client";

import { setSide } from "@/utils/redux/features/appSlice";
import { useAppDispatch } from "@/utils/redux/hooks";
import { useSelector } from "react-redux";

export default function SideSelector(){
    const dispatch = useAppDispatch();
    return(
        <select id="SideSelector" className="h-fit w-full rounded-lg p-2 bg-accent border-2 group-hover:border-primary border-accent
         hover:bg-primary transition-all duration-300 outline-none appearance-none flex text-center"
            onChange={() => {
                var e = (document.getElementById("SideSelector")) as HTMLSelectElement;
                var sel = e.selectedIndex;
                var opt = e.options[sel];
                if(opt.value == "Affirmative"){
                    dispatch(setSide("Affirmative"))
                }else if(opt.value == "Negative"){
                    dispatch(setSide("Negative"));
                }
            }}>
            <option value="Affirmative">AFF</option>
            <option value="Negative">NEG</option>
        </select>
    )
}