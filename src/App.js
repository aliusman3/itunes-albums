import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectFavoritesLength } from './ducks/favorites';
import theme from './theme';
import { RootLayout, NavBar } from './styled';
import SearchPage from './components/SearchPage';
import FavoritesPage from './components/FavoritesPage';

const Link = styled(NavLink)`
  text-decoration: underline;
  color: white;
  margin-right: 10px;
  font-size: 1rem;
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
            <Route path='/search' component={SearchPage}/>
            <Route path='/favorites' component={FavoritesPage} />
            <Redirect to='/search' />
          </Switch>
        </RootLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
