import { sayHello } from "./mutations/say-hello";
import { todoAdd } from "./mutations/todo-add";
import { todoUpdate } from "./mutations/todo-update";
import { getFinishedTodo } from "./queries/get-finished";
import { getTodo } from "./queries/get-todo";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getTodo,
    getFinishedTodo
  },
  Mutation: {
    sayHello,
    todoAdd,
    todoUpdate
  },
};
