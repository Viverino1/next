"use client"
import { setTopic } from "@/utils/redux/features/appSlice";
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks"

export default function TopicSelector(){
    const dispatch = useAppDispatch();
    const topics = useAppSelector((state) => state.public.topics);
    return(
        <select id="topicSelector" className="h-fit w-full rounded-lg p-2 bg-accent border-2
        group-hover:border-primary border-accent hover:bg-primary transition-all duration-300 outline-none appearance-none flex text-center"
            onChange={() => {
                var e = (document.getElementById("topicSelector")) as HTMLSelectElement;
                var sel = e.selectedIndex;
                var opt = e.options[sel];
                dispatch(setTopic(opt.value));
            }}>
            {topics.map((topic) => (
                <option value={topic} key={topic}>{topic}</option>
            ))}
        </select>
    )
}