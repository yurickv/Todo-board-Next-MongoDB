import AddTask from "@/components/id-page/tasks/AddTask";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

async function TasksBoardPage({ params }: Props) {
  const todoBoard = await prisma.todoBoard.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!todoBoard) {
    redirect("/");
  }

  return (
    <section className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className="text-1xl font-bold mb-5 text-center">Board manager</h1>
      <h2 className="text-2xl font-extrabold uppercase my-5 text-center">
        {todoBoard.title}
      </h2>
      <AddTask todo={todoBoard} />
    </section>
  );
}
export default TasksBoardPage;
