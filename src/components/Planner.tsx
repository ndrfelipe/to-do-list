import { AiOutlinePlusCircle  } from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import { Task } from './Task'
import styles from './Planner.module.css';
import { ChangeEvent, FormEvent, useState } from "react";


export function Planner(){
  interface Task {
    content: string;
    isCompleted: boolean;
  }
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  function handleCreateNewTask(event:FormEvent){
    event.preventDefault();

    if (!newTask.trim()) return;

    const newTaskObject = {
      content: newTask,
      isCompleted: false,
    }

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  }
  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value);
  }

  function taskDelete(taskToDelete: string){
    const taskWithoutDeletedOne = tasks.filter( task => {
      return task.content !== taskToDelete;
    })
    setTasks(taskWithoutDeletedOne);
  }

  const toggleTaskCompletion = (taskContent: string): void => {
    const updatedTasks = tasks.map((task) =>
      task.content === taskContent
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );
    setTasks(updatedTasks); // Atualizando o estado das tarefas
  };
    

    return(
        <>
        <section>
            <form onSubmit={handleCreateNewTask} className={styles.form}>
              <input
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newTask}
                onChange={handleNewTaskChange}
              />
              <button type="submit"><span>Criar</span> <AiOutlinePlusCircle size={20} /></button>
            </form>
        </section>

        <section>
            <header>

              <div>
                <strong>Tarefas Criadas</strong>
                <span className={styles.contador}>{tasks.length}</span>
              </div>
              
              <div>
                <strong>Concluidas</strong>
                <span className={styles.contador}>{tasks.filter(task => task.isCompleted).length} de {tasks.length}</span>
              </div>
            </header>

            {tasks.length === 0 ? (
              <div className={styles.noListContent}>
              <AiFillFileText color="gray" size={60}/>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span >Crie tarefas e organize seus itens a fazer</span>
            </div>
            ) : ( tasks.map( task => {
                return <Task
                          content={task.content}
                          isCompleted={task.isCompleted}
                          onDeleteTask={taskDelete}
                          onToggleCompletion={toggleTaskCompletion}
                      />
              })
            )}

            


            
        </section> 
        </> 
         
         
    ) 
}