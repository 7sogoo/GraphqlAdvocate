import { todoModel } from "@/graphql/model/todoSchema";
import { Todo } from "@/generated";

export const todoUpdate = async (_: unknown, { todo }: { todo: Todo }) => {
    const { id, status } = todo
    try {
        const response = await todoModel.findByIdAndUpdate(id, {status})
        return response
    } catch (error) {
        console.error(error)
    }
  };