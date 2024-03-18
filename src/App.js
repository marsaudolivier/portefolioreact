import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Routes/AppRoutes';


function App() {
  return (
    <Router>
    <div>
      <main>
          <AppRoutes />
      </main>
    </div>
  </Router>
  );
}
export default App;
