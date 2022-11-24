import { NavBar } from './NavBar';
import Home from './Element/Home';
import Bisection from './RootOfEquation/Bisection';
import New from './RootOfEquation/New';
import FalsePosition from './RootOfEquation/FalsePosition';
import Newtonraphson from './RootOfEquation/Newtonraphson';
import OnepointIteration from './RootOfEquation/OnepointIteration';
import Secantmethod from './RootOfEquation/Secantmethod';
import Cramer from './LinearAlgebraicEquation/Cramer';
import GaussElimination from './LinearAlgebraicEquation/GaussElimination';
import GaussJordan from './LinearAlgebraicEquation/GaussJordan';
import MatrixInvertion from './LinearAlgebraicEquation/MatrixInvertion';
import Jacobi from './LinearAlgebraicEquation/Jacobi';
import GaussSedial from './LinearAlgebraicEquation/GaussSedial';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Bisection" element={<Bisection/>} />
        <Route path="/FalsePosition" element={<FalsePosition/>} />
        <Route path="/Newtonraphson" element={<Newtonraphson/>} />
        <Route path="/OnepointIteration" element={<OnepointIteration/>} />
        <Route path="/Secantmethod" element={<Secantmethod/>} />
        <Route path="/Cramer" element={<Cramer/>} />
        <Route path="/GaussElimination" element={<GaussElimination/>} />
        <Route path="/GaussJordan" element={<GaussJordan/>} />
        <Route path="/MatrixInvertion" element={<MatrixInvertion/>} />
        <Route path="/Jacobi" element={<Jacobi/>} />
        <Route path="/GaussSedial" element={<GaussSedial/>} />
        <Route path="/New" element={<New/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
