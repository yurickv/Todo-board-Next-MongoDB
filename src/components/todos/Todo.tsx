import { todoProps } from "@/types";

import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl">
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>

      <div className="flex items-center ">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
