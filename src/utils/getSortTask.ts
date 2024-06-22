import { taskProps } from "@/types";

export function filterTasksByStatus(tasks: taskProps[]) {
  const plannedTasks = tasks.filter((task) => task.status === "PLANNED");
  const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS");
  const doneTasks = tasks.filter((task) => task.status === "DONE");

  return {
    plannedTasks,
    inProgressTasks,
    doneTasks,
  };
}
