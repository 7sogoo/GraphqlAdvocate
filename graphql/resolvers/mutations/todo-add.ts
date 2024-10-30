import { Todo } from "@/generated";
import { todoModel } from "@/graphql/model/todoSchema";

export const todoAdd = async (_: unknown, { todo }: { todo: Todo }) => {
    try {
        const response = await todoModel.create({title: todo.title, status: todo.status})
        return response
    } catch (error) {
        console.error(error)
    }
  };