import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todoList = [
    {
        id: uuidv4(),
        name: "Najmun Nafiz",
        village: "Koch",
        familyData:[
            {
                falther:"Hazrat Ali",
                mother:"Nazma Khatun"
            },
            {
                falther:"Kahirul",
                mother:"Kahj"
            }
        ]          
    },
    {
        id: uuidv4(),
        name: "Anamul Hasa",
        village: "Pakhi",
        familyData:[
            {
                falther:"Rahat Ali",
                mother:"Naima Khatun"
            },
            {
                falther: "Jorina",
                mother: "Ght"
            }
        ] 
    },
    {
        id: uuidv4(),
        name: "Arafath Hossain",
        village: "Libo",
        familyData:[
            {
                falther:"Laora Ali",
                mother:"Karai Khatun"
            },
            {
                falther: "Laboni",
                mother: "Dsda"
            }
        ]
    }
]

function Third() {
  return (
        <div>
          {todoList.map((item, index) => 
                <div key={index}>
                    <h3>Name: {item.name}</h3>
                    <h3>Village: {item.village}</h3>
                  
                  {item.familyData.map((familyItem, index) =>
                      <div key={index}>
                          <p>Father: {familyItem.falther}</p>
                          <p>Mother: {familyItem.mother}</p>
                         
                      </div>
                  )}
                </div>

          )}
        </div>
  )
}

export default Third