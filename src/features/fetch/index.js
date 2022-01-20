export const apis = {
    fetchTodo: () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => json
            )
    }
}