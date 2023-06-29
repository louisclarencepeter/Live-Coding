## The Component Lifecycle

- In React, every component goes through a series of "lifecycle" phases 
    - such as creation, updating, and deletion.

- It's important to understand these phases 
    - there are specific operations that have to be done at specific times (lifecyle)

## Lifecycle Phases

- There are three main phases of a component's lifecycle: 
    - Mounting (component being created and inserted into the DOM), 
    - Updating (component being re-rendered as a result of changes either to its props or state)
    - Unmounting (component being removed from the DOM).

- In functional components, we can observe and perform actions at these different stages using React Hooks.

## The `useEffect`

## Hook into Mounting: `useEffect`

- React provides the `useEffect` Hook to run side-effects in our component. 
    - These side-effects could be data fetching, subscriptions, or manually changing the DOM.

- `useEffect` takes two arguments:
    - a function where we put our effect, and
    - an array of dependencies.


  ```jsx
    useEffect(() => {
      console.log("Component did mount");
    }, []);
    ```

- If we pass an empty array `[]` as a second argument, the effect runs once after the first render
