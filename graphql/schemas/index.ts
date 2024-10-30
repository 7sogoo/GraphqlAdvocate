import { gql } from "graphql-tag";

export const typeDefs = gql`
  enum StatusType {
    Todo
    Done
    InProgress
  }

  input TodoInput {
    title: String
    status: StatusType!
  }

  input UpdateTodo {
    id: ID!
    status: StatusType!
  }

  type Todo {
    id: ID!
    title: String!
    status: StatusType!
  }

  type Query {
    helloQuery: String
    getTodo: [Todo]
    getFinishedTodo: [Todo] 
  }

  type Mutation {
    sayHello(name: String!): String
    todoAdd(todo: TodoInput!): Todo
    todoUpdate(todo: UpdateTodo!): Todo
  }
`;
