
## 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside React. It makes UI code more readable and easier to write by combining JavaScript and HTML structure in one place.

## 2. What is the difference between State and Props?

* **State** is a local data storage that belongs to a component and can change over time.
* **Props** are read-only data passed from a parent component to a child component.

## 3. What is the useState hook, and how does it work?

`useState` is a React hook used to manage state in functional components. It returns a state variable and a function to update it.

Example:
const [count, setCount] = useState(0);
```

* `count` → current state
* `setCount` → function to update state

## 4. How can you share state between components in React?

State can be shared by **lifting state up** to a common parent component and passing it down to child components via props.

## 5. How is event handling done in React?

Event handling in React is done using event handlers like `onClick`, `onChange`, etc., with functions.

Example:
<button onClick={handleClick}>Click</button>
