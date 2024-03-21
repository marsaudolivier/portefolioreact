import { Routes, Route } from 'react-router-dom';

import IndexPage from '../Pages/IndexPage';
import ProjectsPage from '../Pages/ProjectsPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        
    </Routes>
       
    );
  };
  
  export default AppRoutes;