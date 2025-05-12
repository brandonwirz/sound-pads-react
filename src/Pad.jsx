import React from "react"
export default function (props) {
  const [on, setOn] = React.useState(props.on)

  function toggle() {
    setOn((prevOn) => !prevOn)
  }
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={on ? "on" : "null"}
      onClick={toggle}
    ></button>
  )
}
