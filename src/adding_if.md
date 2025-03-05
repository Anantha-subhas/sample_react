If you use an `if` statement inside the `map` function to add conditional rendering, it will require a slightly different structure since `if` doesn’t return a value directly in a functional expression. You’ll need to use a return statement inside the `if` block or return `null` if the condition isn't met.

Here’s an example of how to use `if` for conditional rendering inside `map`:

```javascript
<ul className="list-group">
  {arr.map((val, index) => {
    if (val !== "") { // or any other condition you want
      return (
        <li className="list-group-item" key={index}>
          {val}
        </li>
      );
    }
    // If the condition is not met, return null to avoid rendering anything
    return null;
  })}
</ul>
```

### Explanation
- **Using `if` inside `map`**: The `if` statement checks the condition (in this case, `val !== ""`). If it’s true, the `return` statement inside the `if` block renders the `li` element.
- **Returning `null`**: If the condition fails, returning `null` skips rendering for that iteration, effectively ignoring that item in the list.

### When to Use `if` vs. `&&`
- **Use `if`** when you have more complex logic or need multiple conditions.
- **Use `&&`** when the condition is simple because it makes the code shorter and easier to read.


To add a condition on the list items in your component, you can use a conditional check inside the `map` function. For example, you can filter or conditionally render certain items based on a specific condition. 

Here's how you could do it:

```javascript
<ul className="list-group">
  {arr.map((val, index) => (
    // Only render the item if it meets the condition (e.g., val is not empty or val is greater than a number)
    val !== "" && (
      <li className="list-group-item" key={index}>
        {val}
      </li>
    )
  ))}
</ul>
```

### Example with a Specific Condition
For example, if you only want to render items that are numbers greater than 10:

```javascript
<ul className="list-group">
  {arr.map((val, index) => (
    typeof val === "number" && val > 10 && (
      <li className="list-group-item" key={index}>
        {val}
      </li>
    )
  ))}
</ul>
```

### Explanation
- **Condition Inside `map`**: The `val !== ""` condition ensures that only non-empty values are rendered. You can modify this condition as needed.
- **Logical AND (`&&`)**: Using `&&` allows you to conditionally render elements based on the provided condition, skipping those that don’t meet the criteria.

This approach gives flexibility to control which items are displayed based on dynamic conditions.