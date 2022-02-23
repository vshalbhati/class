import React,{useState,useEffect} from 'react'
import Assignlist from './Assignlist';

function Assign({teachers}) {
  const getData=()=>{
    const data = localStorage.getItem('deta');
  if(data){
    return JSON.parse(data);
  }
  else{return []}
  }
  const [teacher, setTeacher] = useState("")
  const [number, setNumber] = useState("")
  const [detas, setDetas] = useState(getData)

  const savedata =(e)=>{
    e.preventDefault();
    let deta ={
      teacher,
      number
    }
    setDetas([...detas, deta]);
    setTeacher('');
    setNumber('')
  }
  const deletedetas=(teacher)=>{
    const leftdetas= detas.filter((element,index)=>{
      return element.teacher !== teacher
    })
    setDetas(leftdetas);
  }

  useEffect(()=>{
    localStorage.setItem('detas',JSON.stringify(detas));
  },[detas])
  return (
    <div className='assign'>
<div className="form">

        <h1>Assign Teacher to Batch</h1>
        <h2>Teacher</h2>
        <select value={teacher} onChange={(e)=>setTeacher(e.target.value)} defaultValue="choose teacher">
                <option defaultValue>Choose teacher</option>
                {teachers.map(teacher=>(<>
                <option key={teacher.name}>{teacher.name}</option>
                </>))}
            </select>
        <h2>Batch</h2>
        <select value={number} onChange={(e)=>setNumber(e.target.value)} defaultValue="choose subject">
                <option defaultValue>Choose subject</option>
                <option>Hindi</option>
                <option>Science</option>
                <option>Math</option>
                <option>English</option>   
            </select>
            <div className="btn">
            <button onClick={savedata}>Save</button>
            </div>
            </div>

            <div className="assignlist">
            {detas.length>0 &&
              <Assignlist detas={detas} deletedetas={deletedetas}/>
            }
            {detas.length<1 && <div>No assignment is done yet</div>}
            </div>

    </div>
  )
}

export default Assign