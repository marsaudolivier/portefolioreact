import { Routes, Route } from 'react-router-dom';

import IndexPage from '../Pages/IndexPage';
import ProjectsPage from '../Pages/ProjectsPage';
import MentionsPage from '../Pages/MentionsPage';
import PartenairesPage from '../Pages/PartenairesPage';
import ErrorPage from '../Pages/ErrorPage';

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/mentions" element={<MentionsPage />} />
        <Route path="/partenaires" element={<PartenairesPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
       
    );
  };
  
  export default AppRoutes;