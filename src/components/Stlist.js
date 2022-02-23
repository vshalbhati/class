import React from 'react'

export const Stlist = ({students,deleteStudent}) => {
  return students.map(student=>(
      <tr key={student.name}>
          <td>{student.name}</td>
          <td><button onClick={()=>deleteStudent(student.name)}>delete</button></td>
      </tr>
  ))
}
