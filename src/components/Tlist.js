import React from 'react'

export const Tlist = ({teachers,deleteTeacher}) => {
  return teachers.map(teacher=>(
      <tr key={teacher.name}>
          <td>{teacher.name}</td>
          <td>{teacher.subject}</td>
          <td><button onClick={()=>deleteTeacher(teacher.name)}>delete</button></td>
      </tr>
  ))
}
