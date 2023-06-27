## Props

- "props" is short for properties
- It's a way of passing data from parent to child components
- React components use props to communicate with each other
- Props might remind you of HTML attributes, but you can pass any JavaScript value through them
- Props are the information that you pass to a JSX tag

## Pass props to the child component

- Props are passed to components during invocation, similar to how arguments are passed to functions.

```js
function ParentComponent() {
  return (
    <ChildComponent name="Sara" age='21' />
  );
}
```

## Accepting Props

- Inside the child component, props can be accessed just like function arguments.

```js
function ChildComponent(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## Conditional rendering

- Conditional rendering allows components to render different outputs based on the state of the application or current props.
    - In React, there is no special syntax for writing conditions.
        - Instead, you’ll use the same techniques as you use when writing regular JavaScript code
        - For example, `if` statement, `ternary` operator, logical `&&` syntax