import React from 'react';
import Home from './container/Home';
import Information from './container/Information';
import Gallery from './container/Gallery';
import Story from './container/Story';
import Play from './container/Play';
import Photos from './container/Photos';
import { Routes, Route, HashRouter as Router, Outlet, NavLink, useLocation } from 'react-router-dom';
import cover from './images/cover.png';
import { CoverWrapper, Figure, CardWrapper, CardContent, ChName, LoadingMask, NavLinkList, Footer } from './style';
import './App.css';

const Layout = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  return (
    <CoverWrapper className={/prewedding|photos|story|play/.test(location.pathname) ? 'light' : ''}>
      <Figure style={{ backgroundImage: `url(${cover})` }}>
        <ChName>文翔 & 怡君</ChName>
      </Figure>
      <CardWrapper>
        <NavLinkList>
          <li><NavLink to="/" title="Home | 首頁">Home</NavLink></li>
          {/* <li><NavLink to="information" title="Information | 婚宴資訊">Information</NavLink></li> */}
          <li><NavLink to="prewedding" title="Prewedding | 婚紗精選">Prewedding</NavLink></li>
          <li><NavLink to="photos" title="Photos | 精選照片">Photos</NavLink></li>
          <li><NavLink to="story" title="Our Story | 我們的故事">Our Story</NavLink></li>
          <li><NavLink to="play" title="Wishes | 我們的故事">Wishes</NavLink></li>
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
          <Route path="prewedding" element={<Gallery />} />
          <Route path="photos" element={<Photos />} />
          <Route path="story" element={<Story />} />
          <Route path="play" element={<Play />} />
          <Route index element={<Home setIsLoading={setIsLoading} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
