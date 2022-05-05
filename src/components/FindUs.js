import React, { useState } from "react";
import genders from "../utils/genders";

const FindUs = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(2).fill("")
    );


    return(
        <div>
            <form>
                <label for="name">Name</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <label for="email">Email</label>
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                />
                <h3>Choose Gender</h3>
                <div>
                    <ul>
                        {genders.map(({index}, index) => {
                            return (
                                <li key={index}>
                                    <input
                                        type="checkbox"
                                        checked={checkedState[index]}
                                    />
                                </li>
                            )
                        })}
                    </ul>

                </div>
                
            </form>
        </div>
    )
}

export default FindUs; 