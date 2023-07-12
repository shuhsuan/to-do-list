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
`getContent`| This checks for errors when fetching API data and returns the `WeatherCard` component if there are no errors. It passes `data` as props which is weather information imported from the `fetch.js` component that handles API calls.

----

## weathercard.js

This is a functional component that receives `summary`, `icon`, `temp`, `feels`, `uv` and `windspeed` as props and displays it. There are 36 different summary options for the forecast (for example: "cloudy", "rainy", "sunny with clouds"...) and each summary has an icon rendered conditionally on the index of the summary. This is managed by an object with key-value pairs called `pic`. All images are stored in a folder named "icons".

----

## cityselector.js

A `city` state stores the input that the user types in and is passed through as props when the `Check Weather` button is clicked to the `onSearch` event which is passed through to the `fetch` component for the API.

The `city` prop is put into the initial URL prop for the `fetch` component like so:

`https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=${city}&timezone=auto&language=en&units=metric`

to complete the API endpoint information for a successful call. 

## fetch.js

This component takes the API host url as props and sets it as the default `url` state. The `options` object handles information needed to make a successful API call.

The `useEffect` hook fetches the data, stores the response in a `data` state, and checks for server errors which if there are any, would be stored in the `error` state. This hook runs anytime the endpoint URL is updated - ie. Anytime the user searches for a city, the Url will update, and the component will fetch for the data.

This component returns `data`, `error`, `isLoading`, `setUrl` to be imported in App.js for use. 

----

Things I learned during this project: 

- How to fetch data with an API
- How to handle errors when the API call doesn't work
- How to digest and display API responses to the viewport 






