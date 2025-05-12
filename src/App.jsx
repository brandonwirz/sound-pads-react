import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData)

  function toggle(id) {
    console.log("Clicked!")
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item
      })
    )
    // map over pads array if current item has same id as the one passed to the function then flip it's on value
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={toggle}
      id={pad.id}
      key={pad.id}
      color={pad.color}
      on={pad.on}
    />
  ))

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  )
}
