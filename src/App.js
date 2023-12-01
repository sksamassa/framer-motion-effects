import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import MyComponent from './MyComponent';

function App() {

  return (
    <div className="App">
      { [...Array(10)].map(index => {
        return <MyComponent />
      })
       }
    </div>
  );
}

export default App;
