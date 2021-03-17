import './App.css';
import Drawer from './Drawer.js'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function App() {
  return (
    <div className="App">
      <Drawer></Drawer>
      <header className="App-header">
        <IconButton style={{position: 'fixed', bottom: '2em', right: '2em'}}  color="primary" variant="contained">
          <AddIcon />
        </IconButton>
      </header>
    </div>
  );
}

export default App;
