import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Montserrat',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className="App-header">
        <p>
          COMING SOON
        </p>
        <p>
          Wow! Signal: Drake Equation
        </p>
        <p>
          COMING SOON
        </p>
      </header>
    </Grommet>
  );
}

export default App;
