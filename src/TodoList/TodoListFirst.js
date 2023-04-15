import React, { useState } from 'react';
import TodoList from './TodoList';
import Button from '@material-ui/core/Button'; 
const TodoListFirst =()=>{
const [inputList, setInputList] = useState('')
const [add, setAdd] = useState([])

const onChange=(event)=> {
  setInputList(event.target.value)
}

const onClick = (event) =>{
  event.preventDefault()
  setAdd((arr) =>{
    return [...arr,inputList]
  })
  setInputList('')  
}

const deleted=(id)=>{
  setAdd((arr) =>{
    return arr.filter((v,index)=>{
      return index !== id;
    })
  })
}

return(
    <div className='h-screen bg-green-500 flex justify-center items-center'>
        <div className='bg-white rounded-2xl p-5' style={{minHeight:'400px'}}>
            <br />
            <h1 className='text-center bg-purple-500 p-3 text-2xl text-white' style={{backgroundColor: '#3f51b5'}}>ToDo List</h1>
            <br />
            <input className='p-2 m-2' style={{borderBottom:'1px solid black',}} type='text' value={inputList}  placeholder='Add a Items' onChange={onChange}/>
            <Button className='w-16 h-10' style={{fontSize:'25px'}} onClick={onClick} variant="contained" color="primary" size="large"><i className="fa-sharp fa-solid fa-plus"></i></Button> 

            <ol >
              {add.map((items,index) =>{
                return <TodoList key={index} id={index} text={items} onSelect={deleted}/>
              })}
            </ol>
        </div>
    </div>
  )
}

export default TodoListFirst;