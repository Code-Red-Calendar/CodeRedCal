import { createRoot } from 'react-dom/client';
import styles from '../stylesheets/app.module.css';

const App = () => {

  return (
    <div className={styles.app}>
      <header>
        <h1>CODE:RED Calendar</h1>
      </header>
      <img src="https://i.pinimg.com/1200x/d7/9d/ca/d79dca659e7f91740f4e68151a289e57.jpg" />
      <main>
      </main>
    </div>
  );
}

const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(<App />)