import { taskProps } from "@/types";

// import Link from "next/link";

const TaskCard = ({ task }: { task: taskProps }) => {
  return (
    <div className="w-full mx-auto flex flex-col gap-4 items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
      <h3 className="text-center font-bold uppercase grow">{task.title}</h3>
      <p>{task.description}</p>

      {/* <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>

      <div className="flex items-center ">
        <DeleteTodo todo={todo} />
      </div> */}
    </div>
  );
};

export default TaskCard;
