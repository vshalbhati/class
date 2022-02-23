import React,{useState, useEffect} from 'react'
import { Tlist } from './Tlist';
import './Navbar.css'
import Assign from './Assign';

const getData=()=>{
  const data = localStorage.getItem('teachers');
  if(data){
    return JSON.parse(data);
  }
  else{return []}
}

function CreateTeacher() {

const [teachers, setTeachers] = useState(getData);

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

const savedata =(e)=>{
  e.preventDefault();
  let teacher ={
    name,
    subject
  }
  setTeachers([...teachers, teacher]);
  setName('');
  setSubject('');
}
const deleteTeacher=(name)=>{
  const leftTeachers= teachers.filter((element,index)=>{
    return element.name !== name
  })
  setTeachers(leftTeachers);
}
useEffect(()=>{
  localStorage.setItem('teachers',JSON.stringify(teachers));
},[teachers])
  return (
    <div>
      <div className="crteacher">
        <div className="form">
        <h1>Create Teacher</h1>
        <form onSubmit={savedata}>
            <h2>Name</h2>
            <input type="text" value={name} required onChange={(e)=>setName(e.target.value)}  placeholder=" Enter Your name"/>
            <h2>Subject</h2>
            <select value={subject} required={true} onChange={(e)=>setSubject(e.target.value)} defaultValue="choose subject">
                <option defaultValue>Choose subject</option>
                <option value="Math">Math</option>
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="Hindi">Hindi</option>
            </select>
            <div className="btn">
            <button type='submit'>Save</button>
            </div>
        </form>
        </div>
        <div className="tlist">
          {teachers.length>0 &&<>
            <h1>Teacher List</h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          <Tlist teachers={teachers} deleteTeacher={deleteTeacher}/>
       </tbody>
      </table>
          </>}
          {teachers.length<1 && <div>No teachers are added yet</div>}
          </div>
        </div>
        <div className="batlist">
          <Assign teachers={teachers}/>
        </div>
        
    </div>
  )
}
export default CreateTeacher