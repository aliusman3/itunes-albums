import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectFavoritesLength } from './ducks/favorites';
import theme from './theme';
import { RootLayout, NavBar, Landing } from './styled';
import SearchBar from './components/SearchBar';
import SearchPage from './components/SearchPage';
import FavoritesPage from './components/FavoritesPage';

const Link = styled(NavLink)`
  text-decoration: underline;
  color: white;
  margin-right: 10px
`;

function App() {
  const favoritesLength = useSelector(selectFavoritesLength);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <RootLayout>
          <NavBar>
            <Link to="/search">Search</Link>
            <Link to="/favorites" >Favorites({favoritesLength})</Link>
          </NavBar>
          <Switch>
            <Route exact path='/' render={() => (
              <Landing>
                <h1 style={{ gridArea: 'landing-text', alignSelf: 'center' }}>Search for your favorite artists</h1>
                <SearchBar />
              </Landing>
            )} />
            <Route path='/search' component={SearchPage}/>
            <Route path='/favorites' component={FavoritesPage} />
          </Switch>
        </RootLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
