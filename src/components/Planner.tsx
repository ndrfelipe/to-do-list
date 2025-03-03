import { AiOutlinePlusCircle  } from "react-icons/ai";
import styles from './Planner.module.css';

export function Planner(){
    return(
        <>
        <section>
            <form className={styles.form}>
              <input type="text" placeholder='Adicione uma nova tarefa' />
              <button type="submit"><span>Criar</span> <AiOutlinePlusCircle size={20} /></button>
            </form>
        </section>

        <section>
            <header>

              <div>
                <strong>Tarefas Criadas</strong>
                <span className={styles.contador}>0</span>
              </div>
              
              <div>
                <strong>Concluidas</strong>
                <span className={styles.contador}>0</span>
              </div>
            </header>

            <div>
              <img />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span >Crie tarefas e organize seus itens a fazer</span>
            </div>

        </section>
        </>
        
        
    )
}