import { useState } from "react"

function Time() {
    const [count, setCount] = useState(10);;

    
    if (count > 0) {
        setTimeout(() => {
            setCount(count -1)
        }, 1000)
    } else {
        alert("fini")
    }
    
    return (<>
        <div className="timer">
            {count}
        </div>
        </>)
}

export default Time