import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath:"todos",
    baseQuery: fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints(builder) {
        return {
            sendPost: builder.mutation({
                query: (user) => {
                    return {
                        method:"POST",
                        url:"/posts",
                        body: {
                            title: user.title,
                            body: user.body,
                            userId: user.userId
                        }
                    }
                }
            }),
            fetchTodos: builder.query({
                query: () => {
                    return {
                        method:"GET",
                        url:"/todos"
                    }
                }
            })
        }
    }
})

export const {useFetchTodosQuery,useSendPostMutation} = todoApi;