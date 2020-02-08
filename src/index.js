import React, {useState} from 'react'
import ReactDOM from'react-dom'
import App from './App'

const players = [{
    name: '田中',
    skills: 'バスケ'
},
{
    name: '佐藤',
    skills: 'テニス'
}
]


ReactDOM.render(<App players={players}/>,document.getElementById('root'))
