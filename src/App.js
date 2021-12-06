import React from 'react';
import Home from './container/Home';
import Information from './container/Information';
import Gallery from './container/Gallery';
import Story from './container/Story';
import { Routes, Route, HashRouter as Router, Outlet, Link } from 'react-router-dom';
import cover from './images/cover.png';
import { CoverWrapper, Figure, CardWrapper, CardContent, ChName, LoadingMask, NavLinkList } from './style';
import './App.css';

const Layout = () => (
<CoverWrapper>
  <Figure style={{ backgroundImage: `url(${cover})` }}>
    <ChName>文翔 & 怡君</ChName>
  </Figure>
  <CardWrapper>
    <NavLinkList>
      <li><Link to="/" title="Home | 首頁">Home</Link></li>
      <li><Link to="information" title="Information | 婚宴資訊">Information</Link></li>
      <li><Link to="gallery" title="Gallery | 精選照片">Gallery</Link></li>
      <li><Link to="story" title="Our Story | 我們的故事">Our Story</Link></li>
    </NavLinkList>
    <CardContent>
      <Outlet />
    </CardContent>
  </CardWrapper>
</CoverWrapper>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Router>
      <Routes>
        {isLoading && <LoadingMask />}
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
