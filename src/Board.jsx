import React from "react"
import Square from "./Square";

function RenderSquare({i}) {
  return <Square index = {i}/>;
}

function BuildRow({index, col}) {
  return <div className="board-row">
    {Array.from({ length: col }).map((_, i) => <RenderSquare i = {i + index} key = {i + index}/>)}
  </div>
}

function ConfigureBoard({row, col}) {
  return <div>
    {Array.from({ length: row }).map((_, i) => <BuildRow index = {i * row} col = {col} key = {i}/>)}
  </div>
}

export default function Board(props) {
  const status = "Ready"
  return (
    <div>
      <div className="status">{status}</div>
      <ConfigureBoard row = {3} col = {3} />
    </div>
  );
}
