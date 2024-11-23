import './App.css';
import Landing from './components/Landing';
import Bio from './components/Bio';
import styled from "styled-components";
import Contact from './components/Contact';

const Container = styled.div`
`;

function App() {
  return (
    <Container>
      <Landing />
      <Bio />
      <Contact />
    </Container>
  );
}
export default App;
