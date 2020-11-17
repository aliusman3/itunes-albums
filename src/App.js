import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { RootLayout, NavBar, Landing } from './styled';
import SearchBar from './components/SearchBar';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <RootLayout>
          <NavBar>
            Hello world
          </NavBar>
          <Switch>
            <Route exact path='/' render={() => (
              <Landing>
                <h1 style={{ gridArea: 'landing-text', alignSelf: 'center' }}>Search for your favorite artists</h1>
                <SearchBar />
              </Landing>
            )} />
            <Route path='/search' component={SearchPage}/>
          </Switch>
        </RootLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
