import { useState } from "react"

function Mor({ userCount, setuserCount }) {
    const [Count, setCount] = useState()

    function change() {
        setCount(userCount)
        if (userCount === "O") {
            setuserCount("X")
        } else {
            setuserCount("O")
        }
    }

    return (<>
        {Count != undefined ? <figure className={Count}>{Count}</figure> : <figure onClick={change}></figure>}
    </>)
}

export default Mor