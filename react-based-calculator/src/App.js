//import logo from './logo.svg';
import './App.css';
import GridContainer from './Components/GridContainer';
import Screen from './Components/Screen';

function App() {
  return (
    <div className="App">
      
      <GridContainer>
        <Screen />
        <Screen>My Screen</Screen>
      </GridContainer>
    </div>
  );
}

export default App;
