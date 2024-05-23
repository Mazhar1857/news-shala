import './App.css'
import NewsItem from './component/newsItem/NewsItem';
import News from './component/news/News';
import SideNavigation from './component/sideNav/SideNavigation';
import SearchBar from './component/searchBar/SearchBar';
import Theme from './component/theme/Theme';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from './component/logo/Logo';
import MobileNav from './component/mobileNavigation/MobileNav';
function App() {
  const theme = useSelector(state => state.theme);

  return (
    <div className='container'>
      <header className={`side-nav-section ${theme.toLowerCase()}`}>
        <Logo />
        <nav>
          <SideNavigation />
        </nav>
      </header>
      <div className={`search-section ${theme.toLowerCase()}`}>
        <SearchBar />
        <div>
          <Theme />
          <MobileNav />
        </div>
      </div>

      <main className={`news-section ${theme.toLowerCase()}`}>
        <Routes>
          <Route path='/' element={<Navigate to='top' />} />
          <Route path='/business' element={<News />} />
          <Route path='/crime' element={<News />} />
          <Route path='/domestic' element={<News />} />
          <Route path='/education' element={<News />} />
          <Route path='/entertainment' element={<News />} />
          <Route path='/environment' element={<News />} />
          <Route path='/food' element={<News />} />
          <Route path='/health' element={<News />} />
          <Route path='/lifestyle' element={<News />} />
          <Route path='/other' element={<News />} />
          <Route path='/politics' element={<News />} />
          <Route path='/science' element={<News />} />
          <Route path='/sport' element={<News />} />
          <Route path='/technology' element={<News />} />
          <Route path='/top' element={<News />} />
          <Route path='/tourism' element={<News />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
