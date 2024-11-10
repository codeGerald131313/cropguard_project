import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Predictions from './components/PlagueWebSocket';
import Catalog from './pages/CatalogPage';
import Resources from './pages/ResourcesPage';
import Support from './pages/SupportPage';
import Cultivation from './pages/CultivationsPage';
import PlagueDetail from './pages/PlagueDetailPage';
import DiseaseDetail from './pages/DiseaseDetailPage';
import NotFound from './pages/NotFoundPage';
import HistoryPage from './pages/HistoryPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predictions" element={<Predictions />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/plague/:id" element={<PlagueDetail />} />
      <Route path="/catalog/disease/:id" element={<DiseaseDetail />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/cultivation" element={<Cultivation />} />
      <Route path="/support" element={<Support />} />
      <Route path="/history" element={<HistoryPage />} /> {/* Nueva ruta */}
      <Route path="*" element={<NotFound />} /> {/* Manejo de errores 404 */}
    </Routes>
  );
};

export default AppRoutes;
