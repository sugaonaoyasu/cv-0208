import React,{useState} from 'react'

const Player = (props) => {
    const playerProf = props.playerProf
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{playerProf.name}：{count}</h1>  
            <p>特技：{playerProf.skills}</p>
            <button type="button" 
            onClick = {() => setCount(count + 1)}
            >おす</button>
        </>
    )
}
export default Player
