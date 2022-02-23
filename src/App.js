import CreateStudent from './components/CreateStudent';
import CreateTeacher from './components/CreateTeacher';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <CreateTeacher/>
        <CreateStudent/>
    </Router>
    </>

  );
}

export default App;
