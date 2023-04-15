import React from 'react';
import Button from '@material-ui/core/Button'; 
import Tooltip from '@material-ui/core/Tooltip'; 

const TodoList = (props) => {
    return(
        <div className='flex'>
            <Tooltip title='Delete'>
            <Button onClick={()=>{props.onSelect(props.id)}} className='h-8 mb-5' style={{fontSize:'25px',margin:'10px',}} variant="contained" color="primary" size="large">
            <i className='fa-solid fa-minus' aria-hidden='true' />
            </Button>
            </Tooltip>

            <li class='list-none' style={{lineHeight: '50px'}}>{props.text}</li>
        </div>
    )
}

export default TodoList;