// src/components/ItemForm.tsx
import { useState } from "react";
import { createItem } from "../api/itemApi";
import type { ItemCreate } from "../api/itemApi";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

interface Props {
  onCreate: () => void;
}

export default function ItemForm({ onCreate }: Props) {
  const [form, setForm] = useState<ItemCreate>({ name: "", price: 0 });
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "price" ? parseFloat(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createItem(form);
    setForm({ name: "", price: 0 });
    setSuccess("Item ajouté avec succès !");
    onCreate();
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <>
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit} className="mb-4 p-3 bg-light rounded shadow-sm">
        <Row className="g-2 align-items-end flex-nowrap">
          <Col xs={12} md={5} className="mb-2 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nom de l'item"
                required
                size="lg"
              />
            </Form.Group>
          </Col>
          <Col xs={8} md={4} className="mb-2 mb-md-0">
            <Form.Group controlId="formPrice">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Prix"
                min={0}
                step={0.01}
                required
                size="lg"
              />
            </Form.Group>
          </Col>
          <Col xs={4} md={3} className="d-grid">
            <Button type="submit" variant="primary" size="lg">
              Ajouter
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
