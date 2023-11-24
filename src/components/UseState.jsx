import { useState } from "react";

export default function UseState() {
  const [name, setName] = useState();
  const [number, setNumber] = useState(1);

  function changeNumber() {
    //previus value
    setNumber((PrevNumber) => PrevNumber + 1);
    setNumber((PrevNumber) => PrevNumber + 1);
  }
  return (
    <>
      <input
        type="text"
        placeholder="nome:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Meu nome é {name}</h2>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>+</button>
    </>
  );
}
