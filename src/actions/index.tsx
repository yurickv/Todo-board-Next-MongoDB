"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;
  if (!input.trim()) {
    return;
  }

  await prisma.todoBoard.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function createTask(formData: FormData) {
  const title = formData.get("inputTitle") as string;
  const description = formData.get("inputDescription") as string;
  if (!title.trim() || !description.trim()) {
    return;
  }
  const id = formData.get("inputId") as string;
  await prisma.todoItem.create({
    data: {
      title: title,
      description: description,
      applyBoard: id,
    },
  });

  revalidatePath(`/${id}`);
}
// export async function changeStatus(formData: FormData) {
//   const inputId = formData.get("inputId") as string;
//   const todo = await prisma.todoBoard.findUnique({
//     where: {
//       id: inputId,
//     },
//   });

//   const updateStatus = !todo?.isCompleted;

//   await prisma.todo.update({
//     where: {
//       id: inputId,
//     },
//     data: {
//       isCompleted: updateStatus,
//     },
//   });

//   revalidatePath("/");
// }

export async function editTodo(formData: FormData) {
  const newTitle = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.todoBoard.update({
    where: {
      id: inputId,
    },
    data: {
      title: newTitle,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todoBoard.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}

export async function searchTodo(formData: FormData) {
  const searcingTitle = formData.get("searchTitle") as string;

  await prisma.todoBoard.findMany({
    where: {
      title: searcingTitle,
    },
    select: {
      title: true,
      id: true,
    },
  });

  revalidatePath("/");
}

export async function getData(searchTitle = "") {
  const data = await prisma.todoBoard.findMany({
    where: {
      title: {
        contains: searchTitle,
      },
    },
    select: {
      title: true,
      id: true,
    },
  });

  return data;
}
