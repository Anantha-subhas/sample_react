import { useState } from "react";


const Lists = () => {
    let arr = ["subhas", "sunder", "mark", "bill-gate", "elon musk"]
    // arr = []
    // if (arr.length == 0) {
    //     return <>
    //         <p>no items in the list</p>
    //     </>
    // }
    //select the list to get active
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            {arr.length === 0 && <p>no items in the list</p>}
            {/* true && "msg" => msg */}
            <ul className="list-group" >
                {
                    arr.map((val, index) => (
                        <li className={selectedIndex === index ? "list-group-item list-group-item-action active" : "list-group-item"} key={index} onClick={() => setSelectedIndex(index)}>{val}</li>
                    )

                    )
                }
            </ul>
        </>
    )

}

export default Lists;