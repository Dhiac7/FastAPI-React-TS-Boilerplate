// src/api/itemApi.ts
import axios from "axios";

const API_URL = "http://localhost:8000/items";

export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface ItemCreate {
  name: string;
  price: number;
}

export const getItems = () => axios.get<Item[]>(API_URL);
export const getItem = (id: number) => axios.get<Item>(`${API_URL}/${id}`);
export const createItem = (item: ItemCreate) => axios.post<Item>(API_URL, item);
export const updateItem = (id: number, item: ItemCreate) =>
  axios.put<Item>(`${API_URL}/${id}`, item);
export const deleteItem = (id: number) => axios.delete(`${API_URL}/${id}`);
