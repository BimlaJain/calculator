import { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState("");

    const handleButtonClick = (value) => {
        if (value === "C") {
            setInput("");
        } else if (value === "=") {
            try {
                setInput(eval(input).toString()); 
            } catch {
                setInput("Error");
            }
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+",
        "C"
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-80 !bg-white p-5 rounded-2xl shadow-xl">
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full p-3 text-right !text-white text-2xl bg-black rounded-md mb-5 focus:outline-none"
                />
                <div className="grid grid-cols-4 gap-3">
                    {buttons.map((button) => (
                        <button
                            key={button}
                            className={`py-3 rounded-lg shadow-md text-xl font-semibold transition-colors 
              ${button === "C" ? "bg-red-400 hover:bg-red-500" : "bg-black hover:bg-gray-700"} 
              ${button === "=" ? "col-span-2 bg-blue-400 hover:bg-blue-500" : ""}`}
                            onClick={() => handleButtonClick(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
