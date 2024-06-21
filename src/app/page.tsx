import * as actions from "@/actions";
import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";

export default async function Home() {
  let data = [];
  data = await actions.getData();
  return (
    <section className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        Task Management Boards
      </h1>

      <div className="flex justify-center flex-col items-center">
        <AddTodo />

        <ul className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo) => (
            <li className="w-full" key={todo.id}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
