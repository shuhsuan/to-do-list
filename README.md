# To-do list

This is a task management website that has a weather search function. I created it to teach myself the basics of data management as well as fetching data from an API.

----

The tasks are stores in an array state named `todos` and updated with `setTodos`.

## Functions

Function | Purpose
---------|---------
`addTodo`| This uses the spread operator to copy the tasks into an array and then appends the task that is passed through the function. Then it updates the tasks list with `setTodos`.
`markTodo`| This uses the spread operator to copy the tasks into an array and marks the selected task as done by updating the `isDone` state to `true` using the index of the task that is passsed through the function, then updates the todo list with `setTodos`.
`removeTodo`| This uses the spread operator to copy the tasks into an array then uses `splice` to remove an array item at the index that is passed through the function.
`getContent`| This checks for errors when fetching API data and returns the `WeatherCard` component if there are no errors.

----




