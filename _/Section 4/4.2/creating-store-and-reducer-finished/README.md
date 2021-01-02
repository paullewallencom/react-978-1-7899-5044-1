# What is compose?

- It is used to add multiple store enhancer function. If you want to additional functionalities to store
  Higher order functions can take functions as parameters and return functions as return values. A function that does either of those is called a higher order function

```js
func1(func2(func3(func4))))
//rewrite it
compose(func1, func2, func3, func4)
```

# What is provider?

The `<Provider />` makes the Redux store available to any nested components that have been wrapped in the connect() function.

# What is ConnectedRouter?

- ConnectedRouter listens to a history object passed from props.
- When history is changed, it dispatches action to redux store.
- Then, store will pass props to component to render.
- This creates uni-directional flow from history->store->router->components.
