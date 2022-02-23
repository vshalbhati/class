import React from 'react'

export const BatchList = ({batchs,deleteBatchs}) => {
  return( 
    <>
    <h1>Batch List</h1>
       <table>
         <thead>
           <tr>
             <th>Number</th>
             <th>Name</th>
             <th>Subject</th>
             <th>Delete</th>
           </tr>
         </thead>
      <tbody>
      {batchs.map(batch=>(
      <tr key={batch.number}>
          <td>{batch.number}</td>
          <td>{batch.stname}</td>
          <td>{batch.subject}</td>
          <td><button onClick={()=>deleteBatchs(batch.name)}>delete</button></td>
      </tr>
           ))}
      </tbody>
      </table>

     </>)

}
export default BatchList