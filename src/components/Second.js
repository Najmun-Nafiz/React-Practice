import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const todoList = [
    {
        "id": uuidv4(),
        "name": "Najmun Nafiz",
        "village": "Koch"
    },
    {
        "id": uuidv4(),
        "name": "Anamul Hasa",
        "village": "Pakhi"
    },
    {
        "id": uuidv4(),
        "name": "Arafath Hossain",
        "village": "Libo"
    }
]

const Second = () => {
  return (
      <div>
          {todoList.map((item) => {
              const { id, name, village } = item;
              return <div key={id}>
                  <h1>{name}</h1>
                  <h1>{village}</h1>
              </div>
          })}
    </div>
  )
}

export default Second