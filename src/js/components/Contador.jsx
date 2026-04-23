import { useState, useEffect } from "react";
import FlipDigit from "./FlipDigit";

export default function Contador() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatted = String(count).padStart(6, "0");
    const digits = Array.from(formatted);

    return (
        <div style={{ display: "flex" }}>
            {digits.map((d, i) => (
                <FlipDigit key={i} digit={d} />
            ))}
        </div>
    );
}
