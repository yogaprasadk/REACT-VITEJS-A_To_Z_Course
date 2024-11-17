import React from 'react'

// using props
// const card = (props) => {
//   return (
//     <div>
//           {props.name}
//     </div>
//   )
// }

// using sub components
// const card = ({name}) => {
//    return (
//     <div>
//           {name}
//     </div>
//   )       
// }

// using props to print children 
const card = (props) => {
  return (
    <div>
          {props.children}
    </div>
  )
}

// without using props to print children
// const card = ({children}) => {
//           return (
//             <div>
//                   {children}
//             </div>
//           )
//         }
        

export default card