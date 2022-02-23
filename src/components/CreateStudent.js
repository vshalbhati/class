import React, {useState,useEffect} from 'react'
import CreateBatch from './CreateBatch';
import { Stlist } from './Stlist';
import './Navbar.css'



const getData=()=>{
  const data = localStorage.getItem('students');
  if(data){
    return JSON.parse(data);
  }
  else{return []}
}

function CreateStudent() {
  const [students, setStudents] = useState(getData);

  const [name, setName] = useState('');

const savedata =(e)=>{
  e.preventDefault();
  let student ={
    name,
  }
  setStudents([...students, student]);
  setName('');
}
const deleteStudent=(name)=>{
  const leftstudents= students.filter((element,index)=>{
    return element.name !== name
  })
  setStudents(leftstudents);
}
useEffect(()=>{
  localStorage.setItem('students',JSON.stringify(students));
},[students])
  return (
    <div >
      <div className="crtstudent">
        <div className="form">
        <h1>Create Student</h1>
        <form onSubmit={savedata}>
        <div className="name">
        <h2>Name</h2>
            <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder=" Enter Your name"/>
        </div>
        <button type='submit'>Save</button>
        </form>
        </div>
        
        <div className='slist'>
          {students.length>0 &&<>
            <h1>student List</h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          <Stlist students={students} deleteStudent={deleteStudent}/>
       </tbody>
      </table>
      
          </>}
          {students.length<1 && <div>No students are added yet</div>}
        </div>
        </div>
        <CreateBatch students={students}/>
        </div>
        
  )
}

export default CreateStudent