import { Routes, Route } from 'react-router-dom';

import IndexPage from '../Pages/IndexPage';
import ProjectsPage from '../Pages/ProjectsPage';
import MentionsPage from '../Pages/MentionsPage';
import PartenairesPage from '../Pages/PartenairesPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/mentions" element={<MentionsPage />} />
        <Route path="/partenaires" element={<PartenairesPage />} />
    </Routes>
       
    );
  };
  
  export default AppRoutes;