## Handling Forms in React

### Controlling the Value of Inputs

- React components explicitly control the value of inputs by binding them to the component's state.
- React ensures that the rendered input value always reflects the component's state, and any changes to the state will propagate to the input.

### Handling Multiple Inputs with One `onChange` Handler

- In scenarios where you have multiple inputs sharing similar behavior, you can utilize a single `onChange` handler to handle changes for all of them.
- This approach avoids duplicating code and simplifies the logic.

### Submitting Forms: Making API Calls on Submit with Data from State

- in React, it's common to make API calls with the form data stored in the component's state.

- To achieve this, 
 you can handle the form's `onSubmit` event, prevent the default form submission behavior, and then access the form values from the component's state.



### Mutable Ref Objects

- In React, refs are used to access or manipulate DOM elements or React components directly.

- While refs are typically used for accessing elements, they can also hold mutable objects.