import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squeres, setSquere] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squeres[0]}></Square>
        <Square value={squeres[1]}></Square>
        <Square value={squeres[2]}></Square>
      </div>
      <div className="board-row">
        <Square value={squeres[3]}></Square>
        <Square value={squeres[4]}></Square>
        <Square value={squeres[5]}></Square>
      </div>
      <div className="board-row">
        <Square value={squeres[6]}></Square>
        <Square value={squeres[7]}></Square>
        <Square value={squeres[8]}></Square>
      </div>
    </>
  );
}
