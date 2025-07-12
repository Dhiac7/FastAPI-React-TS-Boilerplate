// src/pages/Home.tsx
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div style={{ minHeight: '100vh', background: '#f6f8fa', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw' }}>
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={10} lg={8} xl={7} style={{ maxWidth: 700 }}>
            <Card className="shadow-lg mx-auto" style={{ borderRadius: 18 }}>
              <Card.Body>
                <h2 className="text-center mb-4" style={{ fontWeight: 700, fontSize: '2rem' }}>FastAPI + React CRUD</h2>
                <ItemForm onCreate={triggerRefresh} />
                <ItemList key={String(refresh)} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
