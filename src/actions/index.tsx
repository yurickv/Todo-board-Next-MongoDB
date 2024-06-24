"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { Status } from "@/types";

// Actions for todo Boards
export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;
  if (!input.trim()) {
    return;
  }

  try {
    await prisma.todoBoard.create({
      data: {
        title: input,
      },
    });

    revalidatePath(`/`);
    return {
      status: "201",
      message: "Board for task created successfully",
    };
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo");
  }
}

export async function editTodo(formData: FormData) {
  const newTitle = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  try {
    await prisma.todoBoard.update({
      where: {
        id: inputId,
      },
      data: {
        title: newTitle,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Failed to update todo");
  }
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  try {
    await prisma.todoBoard.delete({
      where: {
        id: inputId,
      },
    });

    revalidatePath("/");
    return {
      status: "200",
      message: "Todo board deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo");
  }
}

export async function getData(searchTitle = "") {
  try {
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
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function getOneTodo(id: string) {
  try {
    const data = prisma.todoBoard.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching Todo Board:", error);
    throw new Error("Failed to fetch Todo Board");
  }
}
// Actions for task

export async function createTask(formData: FormData) {
  const title = formData.get("inputTitle") as string;
  const description = formData.get("inputDescription") as string;
  if (!title.trim() || !description.trim()) {
    return;
  }
  const id = formData.get("inputId") as string;

  try {
    await prisma.todoItem.create({
      data: {
        title: title,
        description: description,
        applyBoard: id,
      },
    });
    revalidatePath(`/${id}`);
    return {
      status: "201",
      message: "Task created successfully",
    };
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("Failed to create task");
  }
}

export async function getAllTasks(id: string) {
  try {
    const data = await prisma.todoItem.findMany({
      where: {
        applyBoard: id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("Failed to fetch tasks");
  }
}
export async function deleteTask(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  try {
    const data = await prisma.todoItem.delete({
      where: {
        id: inputId,
      },
    });
    revalidatePath(`/${data.applyBoard}`);
    return {
      status: "200",
      message: "Task deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo");
  }
}

export async function editTask(formData: FormData) {
  const newTitle = formData.get("newTitle") as string;
  const newDescription = formData.get("newDescription") as string;
  const inputId = formData.get("inputId") as string;

  try {
    const data = await prisma.todoItem.update({
      where: {
        id: inputId,
      },
      data: {
        title: newTitle,
        description: newDescription,
      },
    });

    revalidatePath(`/${data.applyBoard}`);
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Failed to update todo");
  }
}

export async function updateTaskStatus(id: string, newStatus: Status) {
  try {
    await prisma.todoItem.update({
      where: {
        id: id,
      },
      data: {
        status: newStatus,
      },
    });

    revalidatePath(`/${id}`);
  } catch (error) {
    console.error("Failed to update task status", error);
  }
}
