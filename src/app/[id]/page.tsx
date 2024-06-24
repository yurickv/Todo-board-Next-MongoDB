import * as actions from "@/actions";
import AddTask from "@/components/id-page/AddTask";
import TaskColumns from "@/components/id-page/TaskColumns";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { taskProps } from "@/types";

type Props = {
  params: { id: string };
};

async function TasksBoardPage({ params }: Props) {
  const todoBoard = await actions.getOneTodo(params.id);

  if (!todoBoard) {
    redirect("/");
  }
  const tasks: taskProps[] = await actions.getAllTasks(params.id);
  return (
    <section className="w-screen py-6 px-4 md:px-16 lg:px-24">
      <Link
        href="/"
        className="text-white p-1 flex gap-1 text-left items-center"
      >
        <FaLongArrowAltLeft /> All Todo Boards
      </Link>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-1xl font-bold mb-5 text-center">Board manager</h1>
        <h2 className="text-2xl font-extrabold uppercase my-5 text-center">
          {todoBoard.title}
        </h2>
        <AddTask todo={todoBoard} />
        <TaskColumns tasks={tasks} />
      </div>
    </section>
  );
}
export default TasksBoardPage;
