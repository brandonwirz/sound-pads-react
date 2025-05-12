import React from "react"
export default function (props) {
  console.log(props.id)

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : "null"}
      onClick={() => props.toggle(props.id)}
    ></button>
  )
}
