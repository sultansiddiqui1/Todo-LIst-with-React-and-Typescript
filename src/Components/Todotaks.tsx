import React from 'react'
import { ITask } from '../interfaces';



interface Props{
    task: ITask;
    completetask(tasknametodelete:string): void;
    

}

const Todotaks = ({ task,completetask }: Props) => {
    
    return (
        
        <div className="tasks">
            <div className="content">
                <span> {task.taskname} </span>
               <span>{task.deadline}</span>
                </div>
            <button onClick={() => {
                completetask(task.taskname);
            }}> finished</button>
            </div>
            
       
    )
};

export default Todotaks;
