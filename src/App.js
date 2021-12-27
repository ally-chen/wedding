import React from 'react';
import Home from './container/Home';
import Information from './container/Information';
import Gallery from './container/Gallery';
import Story from './container/Story';
import { Routes, Route, HashRouter as Router, Outlet, NavLink, useLocation } from 'react-router-dom';
import cover from './images/cover.png';
import { CoverWrapper, Figure, CardWrapper, CardContent, ChName, LoadingMask, NavLinkList, Footer } from './style';
import './App.css';

const Layout = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  return (
    <CoverWrapper className={/gallery|story/.test(location.pathname) ? 'light' : ''}>
      <Figure style={{ backgroundImage: `url(${cover})` }}>
        <ChName>文翔 & 怡君</ChName>
      </Figure>
      <CardWrapper>
        <NavLinkList>
          <li><NavLink to="/" title="Home | 首頁">Home</NavLink></li>
          <li><NavLink to="information" title="Information | 婚宴資訊">Information</NavLink></li>
          <li><NavLink to="gallery" title="Gallery | 精選照片">Gallery</NavLink></li>
          <li><NavLink to="story" title="Our Story | 我們的故事">Our Story</NavLink></li>
        </NavLinkList>
        <CardContent>
          <Outlet />
        </CardContent>
      </CardWrapper>
      <Footer>© {currentYear} by Ally Chen</Footer>
    </CoverWrapper>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Router>
      {isLoading && <LoadingMask />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="information" element={<Information />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="story" element={<Story />} />
          <Route index element={<Home setIsLoading={setIsLoading} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
