import { Routes, Route } from 'react-router-dom';

import IndexPage from '../Pages/IndexPage';
import SkillPage from '../Pages/SkillPage';
import ProjectsPage from '../Pages/ProjectsPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/compétences" element={<SkillPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        
    </Routes>
       
    );
  };
  
  export default AppRoutes;