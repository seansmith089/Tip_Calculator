import './App.css';

// CONTEXT IMPORT
import { BillContextProvider } from './context/BillContext';

//  COMPONENT IMPORT
import CardBackground from './components/Cards/CardBackground';
import CardTotals from './components/Cards/CardTotals';
import CardCalculationsBG from './components/Cards/CardCalculations';


function App() {
  return (
    <BillContextProvider>
      <div className="app">
        <div className="title-container">
          <h2 className="title-text">SPLI</h2>
          <h2 className="title-text">TTER</h2>
        </div>
        <CardBackground>
          <CardCalculationsBG></CardCalculationsBG>
          <CardTotals></CardTotals>
        </CardBackground>
      </div>
    </BillContextProvider>
  );
}

export default App;
