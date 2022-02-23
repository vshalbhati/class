import React from 'react'

function Assignlist({detas,deletedetas}) {
  return (
    <div>
      <h1>Assign List</h1>
      <table>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Batch</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {detas.map(deta=>
            <tr key={deta.teacher}>
              <td>{deta.teacher}</td>
              <td>{deta.number}</td>
              <td><button onClick={()=>deletedetas(deta.teacher)}>delete</button></td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )
}

export default Assignlist