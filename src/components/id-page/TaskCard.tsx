import { taskProps } from "@/types";
import DeleteTask from "./DeleteTask";
import { FaBars } from "react-icons/fa";
import EditTask from "./EditTask";
import ChangeStatus from "./EditStatusTask";

// import Link from "next/link";

const TaskCard = ({ task }: { task: taskProps }) => {
  return (
    <div className="w-full mx-auto flex flex-col gap-4 items-center justify-between bg-slate-900 py-4 px-20 rounded-lg relative">
      <h3 className="text-center font-bold uppercase grow">{task.title}</h3>
      <p>{task.description}</p>

      <details className="absolute top-4 right-4 z-10">
        <summary className="cursor-pointer flex justify-end font-bold p-1">
          <FaBars />
        </summary>
        <div className="flex flex-col mt-1 bg-white rounded-lg w-full overflow-hidden">
          <DeleteTask task={task} />
          <EditTask task={task} />
          <ChangeStatus task={task} />
        </div>
      </details>
    </div>
  );
};

export default TaskCard;
