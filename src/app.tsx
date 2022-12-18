import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { StandardButton } from './components/buttons/StandardButton';

export const App: React.FC = () => {
  return (<><StandardButton onClick={() => { }} />{/*<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
<Route path="dashboard" element={<Dashboard />} />*/}

    {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
    {/*<Route path="*" element={<NoMatch />} />
    </Route>
          </Routes>*/}</>)
}

