import { useState } from "react";

const MyComponent = () => {
    const [message, setMessage] = useState("Button not clicked");

    // Define the function to be called when the button is clicked
    const handleClick = () => {
        setMessage("Button was clicked!"); // This updates the state with a new message
        // You can add any other actions here
        console.log("Button clicked!"); // Logs to the console
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default MyComponent;

/*
Explanation
State Management: useState is used to manage the state (message) that updates when the button is clicked.
Event Handler: handleClick is a function that will execute whenever the button is clicked. Here, it updates the message and logs a message to the console.
onClick Prop: The button’s onClick attribute is set to handleClick, linking the function to the button’s click event.
You can replace setMessage or console.log with any other actions you want to perform on the button click.
*/
