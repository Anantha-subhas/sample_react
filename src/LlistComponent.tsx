import { useState } from "react";

const ListComponent = () => {
    const [selectedItem, setSelectedItem] = useState(""); // State to hold the clicked item
    const arr = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Example array

    return (
        <div>
            <h1>{selectedItem}</h1> {/* Display the selected item here */}
            <ul className="list-group">
                {arr.map((val, index) => (
                    <li
                        className="list-group-item"
                        key={index}
                        onClick={() => setSelectedItem(val)} // Set the selected item on click
                    >
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListComponent;
