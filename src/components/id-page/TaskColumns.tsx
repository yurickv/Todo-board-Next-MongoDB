import { taskProps } from "@/types";
import { filterTasksByStatus } from "@/utils/getSortTask";
import TaskCard from "./TaskCard";

// import Link from "next/link";

const TaskColumns = ({ tasks }: { tasks: taskProps[] }) => {
  const { plannedTasks, inProgressTasks, doneTasks } =
    filterTasksByStatus(tasks);

  return (
    <ul className="flex gap-4 mt-6 w-full">
      <li className="w-1/3">
        <h3 className="my-4 text-center font-bold">To do</h3>
        <ul>
          {plannedTasks.map((task) => (
            <li className="w-full mt-4" key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </li>
      <li className="w-1/3">
        <h3 className="my-4 text-center font-bold">In process</h3>
        <ul>
          {inProgressTasks.map((task) => (
            <li className="w-full mt-4" key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </li>
      <li className="w-1/3">
        <h3 className="my-4 text-center font-bold">Done</h3>
        <ul>
          {doneTasks.map((task) => (
            <li className="w-full mt-4" key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default TaskColumns;
