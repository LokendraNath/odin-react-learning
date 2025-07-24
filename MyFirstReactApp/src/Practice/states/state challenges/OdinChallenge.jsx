import { useState } from "react";

export function Person() {
  const [person, setPerson] = useState({ first: "",last: ""  });

  function handleSetPerson(e){
    const {name,value} = e.target
    setPerson({
      ...person,
      [name]: value
    })
  }

  return (
    <>
      <h1>{person.first} {person.last}</h1>
      <input type="text" name="first" onChange={handleSetPerson} value={person.first} placeholder="Enter First Name" />
      <input type="text" name="last" onChange={handleSetPerson} value={person.last} placeholder="Enter second Name" />
    </>
  );
}