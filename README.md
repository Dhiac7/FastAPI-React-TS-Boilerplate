# FastAPI + React CRUD

Ce projet est une application CRUD complète composée d'un backend FastAPI (Python) et d'un frontend React (TypeScript, Vite, Bootstrap). Il permet de gérer une liste d'items avec création, lecture, mise à jour et suppression.

---

## Architecture du projet

```
my_fastapi_project/
│
├── app/           # Backend FastAPI (Python)
│   ├── main.py
│   ├── database.py
│   ├── models/
│   ├── routers/
│   ├── schemas/
│   ├── test.py
│   └── requirements.txt
│
└── frontend/      # Frontend React (TypeScript, Vite, Bootstrap)
    ├── src/
    ├── public/
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── ...
```

---

## Installation et lancement

### Backend (FastAPI)

**Prérequis** : Python 3.8+, PostgreSQL

1. Installer les dépendances :
   ```bash
   cd app
   python -m venv venv
   source venv/bin/activate  # ou venv\Scripts\activate sous Windows
   pip install -r requirements.txt
   ```
2. Configurer la base de données dans `app/database.py` :
   ```python
   DATABASE_URL = "postgresql://<user>:<password>@localhost:5432/<dbname>"
   ```
   Créez la base dans PostgreSQL si besoin.
3. Lancer le serveur :
   ```bash
   uvicorn app.main:app --reload
   ```
   L'API sera disponible sur http://localhost:8000

### Frontend (React + Vite + Bootstrap)

**Prérequis** : Node.js 18+

1. Installer les dépendances :
   ```bash
   cd frontend
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
   Le frontend sera accessible sur http://localhost:5173

---

## Fonctionnalités principales

- Ajouter, lister, modifier et supprimer des items (nom, prix)
- Synchronisation en temps réel entre le frontend et le backend
- Design moderne et responsive grâce à Bootstrap et React Bootstrap
- Feedback utilisateur (alertes de succès pour ajout/suppression)
- Navbar professionnelle, formulaire ergonomique, cartes d’items élégantes

---

## Exemples d'utilisation de l'API

- **Créer un item**
  ```http
  POST /items/
  Content-Type: application/json
  {
    "name": "Ordinateur",
    "price": 1200
  }
  ```
- **Lister les items**
  ```http
  GET /items/
  ```
- **Récupérer un item**
  ```http
  GET /items/{item_id}
  ```
- **Mettre à jour un item**
  ```http
  PUT /items/{item_id}
  Content-Type: application/json
  {
    "name": "Ordinateur portable",
    "price": 1300
  }
  ```
- **Supprimer un item**
  ```http
  DELETE /items/{item_id}
  ```

---

## Technologies utilisées

### Backend

- FastAPI
- SQLAlchemy
- Pydantic (v2, avec `from_attributes = True` dans les schémas)
- PostgreSQL
- Uvicorn

### Frontend

- React 19
- TypeScript 5
- Vite 7
- Axios
- Bootstrap 5
- React Bootstrap
- React Bootstrap Icons

---

## Structure technique et bonnes pratiques

- **CORS** configuré pour accepter les requêtes du frontend en développement (`http://localhost:5173`).
- **Validation des données** avec Pydantic (v2).
- **Modèle SQLAlchemy** pour la table `items` (id, name, price, description).
- **Séparation claire** des routes, modèles, schémas et logique de base de données.
- **Configuration TypeScript** : options strictes, suppression de l’option non reconnue `erasableSyntaxOnly`.
- **Design** : import global de Bootstrap dans `main.tsx`, Navbar, Cards, feedback utilisateur, responsive.

---

## Tests

- Un script de test de connexion à la base de données est disponible dans `app/test.py` :
  ```bash
  python test.py
  ```

---

## Conseils & remarques

- Pour la production, adaptez la configuration CORS et la sécurité.
- Le design peut être personnalisé facilement (couleurs, logo, etc.).
- Les dépendances sont à jour (voir `requirements.txt` et `package.json`).
- Si vous voyez l’erreur TypeScript `Unknown compiler option 'erasableSyntaxOnly'`, supprimez cette option de vos fichiers `tsconfig`.

---

**Auteur :** Votre nom

---

Si tu veux que j’ajoute des captures d’écran, des badges, un guide de déploiement, ou toute autre section, dis-le-moi ! 