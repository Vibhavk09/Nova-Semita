import React from "react"
import ReactDOM from "react-dom"


function MyInfo()
{
  return (
    <div>
      <h1>Vibhav</h1>
      <p>Hello , this is Vibhav Kamat</p>
      <ol>
      <li>Bali</li>
      <li>Switzerland</li>
      <li>Phillipines</li>
      </ol>
    </div>
  )
}

ReactDOM.render(<MyInfo/>,document.getElementById("root"))



// function MyApp()
// {
//     return (
//         <div>
//             <ul>
//                 <li>1
//                 </li>
//                 <li>2
//                 </li>
//                 <li>3
//                 </li>
//             </ul>
//         </div>
//     )
// }

// JSX
//ReactDOM.render(<ul><li>1</li><li>2</li><li>3</li></ul>, document.getElementById("root"))