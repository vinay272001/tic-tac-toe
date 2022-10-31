import React, { useState } from "react"

export default function Square({ index }) {
  const [state, setState] = useState({});
  return (
    <button className="square" onClick={() => setState({value : 'X'}) }>
      {state.value}
    </button>
  );
}

