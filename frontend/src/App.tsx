// src/App.tsx
import Home from "./pages/Home";
import { Navbar, Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md" className="mb-4 shadow">
        <Container>
          <Navbar.Brand href="#">FastAPI + React CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <Home />
    </>
  );
}
