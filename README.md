# quote_generator
A simple web application that generates random quotes and displays them along with the author's name. Users can click a button to get a new random quote.

## Features
- Fetches quotes from the [type.fit API](https://type.fit/api/quotes) to get a wide range of quotes.
- Displays a random quote along with the name of the author.
- Allows users to get a new random quote by clicking the "New Quote!" button.
- Stylish and responsive design.

## Technologies Used
The project uses the following technologies:

- React: A JavaScript library for building user interfaces.
- CSS (with CSS Modules): For styling and creating a responsive design.
- [type.fit API](https://type.fit/api/quotes): Provides a collection of quotes to fetch and display.

## How It Works
The "Quotes Generator" is a simple web application built using React that fetches quotes from the type.fit API. It allows users to view random quotes and get new ones with a click of a button.

Here's a breakdown of how the application works:

1. **Fetching Quotes from the API:**

  - When the application loads, it makes an HTTP request to the [type.fit API](https://type.fit/api/quotes) using the `fetch` function. This API provides a collection of quotes in JSON format.
  - The useEffect hook is used to fetch the quotes when the component mounts (i.e., when the application loads). The fetched quotes are stored in the quotes state variable using the useState hook.

2. **Displaying a Random Quote:**

  - The application uses the quotes state, which contains an array of fetched quotes.
  - A random index is generated using the Math.random() function and the length of the quotes array to select a random quote.
  - The selected quote is then displayed on the screen along with the name of the author (if available). The author's name is extracted from the quote object and displayed using the quote.author property.
  - The initial random quote is displayed when the component mounts for the first time.

3. **Getting a New Quote:**

  - When the user clicks the "New Quote!" button, the getQuote function is called.
  - The `getQuote` function generates a new random index using the same approach as before, and it updates the quote state with the new randomly selected quote.
  - As a result, the displayed quote and author change to a different random quote each time the button is clicked.

4. **Styling and User Interface:**

  - The application uses CSS Modules for styling, providing a clean and modular CSS structure.
  - The design is simple, with a header image and a container for displaying the quote and author information. The button to get a new quote is also included.
  - The application is responsive and can be used on various devices, adapting to different screen sizes.

5. **Error Handling:**

 - The application includes basic error handling for failed API requests. If there is an issue with fetching quotes from the API, an error message will be logged to the console.

With these functionalities, the "Quotes Generator" allows users to discover and enjoy a wide range of quotes, providing inspiration and motivation with each new random quote

## Demo
Check out the live demo of quote_generator [here](https://sreeyu.github.io/quote_generator/).

## Usage
1. Open the application in your web browser.
2. A random quote along with the name of the author will be displayed.
3. To get a new random quote, click the "New Quote!" button.
4. Enjoy inspirational and thought-provoking quotes!

# Project Notes

## useEffect
`useEffect` is a hook in React that allows you to perform side effects in functional components. Side effects are actions that happen outside of the normal component rendering process, such as fetching data from a server, subscribing to events, or updating the document title. 

In simple terms, `useEffect` is used for handling tasks that need to occur after a component has rendered or when something in the component has changed. It helps you keep your component's logic clean and organized by separating the side effects from the main rendering logic.

You use `useEffect` by passing it a function, and React will call that function after the component has rendered. You can also specify dependencies for the effect, which tells React to run the effect only when certain values change. This allows you to control when the effect runs and prevents unnecessary re-renders.

Overall, `useEffect` is a powerful tool that makes it easy to handle common side effects in React components and keeps your code more maintainable and efficient.

## HTTP request with fetch API
The fetch API is a modern JavaScript API that allows you to make HTTTP requests from a web browser or a Node.js environment. It provides a simple and esy-to-use interface for fetching resources from the network, such as JSON data, images, or other files.

Here's a brief description of making HTTP requests with the fetch API:

1. Importing fetch API: In a web browser, you don't need to install anything because the fetch API is built into the global `window` object. In Node.js, you can use it by requiring the `node-fetch` module.

2. Sending a GET Request: To send a GET request, you use the `fetch()` function and provide the URL you want to fetch as an argument. The `fetch()` function returns a promise that resolves to the response object, which represents the response to the request.

3. Handling the response: Once you get the response object, you can use methos like `.json()` to parse the response as JSON, `.text()` to get the response as plain text, or `.blob()` to get the response as a binary blob. These methods also return promises, so you can use `async/await` or `.then()` to handle the data.

4. Sending POST or other requests: If you need to send data with the request (e.g., for Post requests), you can include the `method` option and set it to `"POST"` or another HTTP method. You can also include headers and a request body using the `headers` and `body` options.

5. Handling Errors: You should alsways check for errors when making HTTP requests. You can use the `.ok` property of the response object to check if the request was successful(status code between 200 anf 299). If there's an error, you can handle it in a `catch()` block.

## Conditional chaining operator (?)
The conditional chaining operator, also known as the optional chaining operator, is a feature introduced in modern JavaScript that makes it easier to access nested properties of objects without causing errors.

Imagine you have an object that contains other objects, and you want to access a property nested deep within these objects. In the past, if any of the objects along the way were missing or null, you would encounter an error. The conditional chaining operator helps you avoid these errors by allowing you to safely navigate through the nested structure. 

The syntax for the conditional chaining operator is the question mark `?.`. When you use it, JavaScript will check if the property you are trying to access exists before attempting to access it. If the property exists, it will return its value; otherwise, it will return `undefined` without throwing an error. 

The conditional chaining operator is useful when you are dealing with complex data structures and want to access nested properties in a safe and concise way, without worrying about potential errors. It helps improve the robustness and readability of your code.