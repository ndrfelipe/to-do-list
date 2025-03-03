import { Header } from './components/Header'
import { Planner } from './components/Planner'
import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <Planner />
        </main>
      </div>
    </>
  )
}

