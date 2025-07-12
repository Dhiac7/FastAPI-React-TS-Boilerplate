// src/components/ItemList.tsx
import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../api/itemApi";
import type { Item } from "../api/itemApi";
import { Card, Button, Row, Col, Alert } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res.data);
  };

  const handleDelete = async (id: number) => {
    await deleteItem(id);
    setSuccess("Item supprimé avec succès !");
    fetchItems();
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <div>
      <h3 className="text-center mb-3" style={{ fontWeight: 600 }}>Liste des items</h3>
      {success && <Alert variant="success">{success}</Alert>}
      <Row className="g-4 justify-content-center">
        {items.map((item) => (
          <Col xs={12} sm={10} md={12} key={item.id} className="mb-2">
            <Card className="shadow-sm h-100 text-center border-0" style={{ minHeight: 150, borderRadius: 14 }}>
              <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <div>
                  <Card.Title style={{ fontSize: '1.2rem', fontWeight: 500 }}>{item.name}</Card.Title>
                  <Card.Text className="text-muted mb-3">Prix : ${item.price}</Card.Text>
                </div>
                <Button variant="outline-danger" onClick={() => handleDelete(item.id)} style={{ minWidth: 120, borderRadius: 20, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Trash size={18} className="me-1" /> Supprimer
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {items.length === 0 && (
          <Col>
            <Card className="text-center text-muted p-4 shadow-sm border-0">Aucun item</Card>
          </Col>
        )}
      </Row>
    </div>
  );
}
