import { todoModel } from "@/graphql/model/todoSchema";

export const getTodo = async () => {
    try {
        const response = await todoModel.find()
        return response
    } catch (error) {
        console.error(error)
    }
  };
  