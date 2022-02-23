import React,{useState,useEffect} from 'react'
import BatchList from './BatchList';

const getData=()=>{
  const data = localStorage.getItem('students');
  if(data){
    return JSON.parse(data);
  }
  else{return []}
}

function CreateBatch({students}){
  const [batchs, setBatchs] = useState(getData);

  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [stname, setstname] = useState("");

  const savedata =(e)=>{
    e.preventDefault();
    let batch ={
      number,
      stname,
      subject
    }
    setBatchs([...batchs, batch]);
    setSubject('');
    setNumber('');
    setstname('');
  }
  const deleteBatchs=(name)=>{
    const leftBatchs= batchs.filter((element,index)=>{
      return element.name !== name
    })
    setBatchs(leftBatchs);
  }

  useEffect(()=>{
    localStorage.setItem('batchs',JSON.stringify(batchs));
  },[batchs])
  return(
    <div className='crtbatch'>
      <div className="form">
        <h1>Create Batch</h1>
        <form onSubmit={savedata}>
        <h2>Batch number</h2>
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} required placeholder=" Enter batch number"/>
        <h2>Student</h2>
        <select key={students.name} value={stname} onChange={(e)=>setstname(e.target.value)}  defaultValue="choose subject">
        <option defaultValue>Choose student</option>
        {students.map(students=>(
        <>
                <option>{students.name}</option>
        </>))}
        </select>

        <h2>Subject</h2>
        <select value={subject} onChange={(e)=>setSubject(e.target.value)} defaultValue="choose subject">
                <option defaultValue>Choose subject</option>
                <option value="Math">Math</option>
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="Hindi">Hindi</option>
          </select>
            <div className="btn">
            <button>Save</button>
            </div>
            </form>
            </div>

            <div className="tbl">
            {batchs.length>0 &&
                <BatchList batchs={batchs} deleteBatchs={deleteBatchs}/>
            }
                      {batchs.length<1 && <div>No batches are added yet</div>}
            </div>
    </div>
  )
        }
export default CreateBatch