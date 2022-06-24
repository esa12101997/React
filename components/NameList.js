import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const persons = [
    {
      id: 1,
      name: 'Riya',
      age: 30,
      skill: 'Ritu'
    },
    {
      id: 2,
      name: 'Carol',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Disha',
      age: 28,
      skill: 'Vue'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
}

export default NameList