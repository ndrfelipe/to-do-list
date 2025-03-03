import styles from './Task.module.css';
import { AiOutlineDelete } from "react-icons/ai";

interface TaskProp {
    content: string;
    isCompleted: boolean;
    onDeleteTask: (task: string) => void;
    onToggleCompletion: (task: string) => void;
}

export function Task({content, isCompleted, onDeleteTask, onToggleCompletion}:TaskProp){

    function handleDeleteTask(){
        onDeleteTask(content);
    }
    function handleToggleCompletion(){
        console.log(`Tarefa "${content}" concluída? ${!isCompleted}`);
        onToggleCompletion(content);
    }

    return (
        <div className={styles.toDoList}>
            <div className={styles.toDoBox}>
                <div>
                    <input
                        className={styles.checkbox} 
                        type="checkbox" 
                        checked={isCompleted}
                        onChange={handleToggleCompletion}
                        />
                    <p className={`${isCompleted ? styles.completedTask : ''}`}>{content} </p>
                </div>
            
                <button onClick={handleDeleteTask} className={styles.btn}>
                    <AiOutlineDelete />
                </button>
            </div>
      </div>
    )
}