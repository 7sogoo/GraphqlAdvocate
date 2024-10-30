import { todoModel } from "@/graphql/model/todoSchema";

export const getFinishedTodo = async () => {
    try {
        const response = await todoModel.find({status: "Done"})
        return response
    } catch (error) {
        console.error(error)
    }
  };
  