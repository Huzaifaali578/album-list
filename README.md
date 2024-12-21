# Album List Application

This project is a React-based application that allows users to manage albums with the following key features:
- **Hosted Link**: https://album-list-4trv.onrender.com/
- **YouTube Link**: https://youtu.be/L-ZHrjDSrTE?si=PvJRs3F_dAOBdwgj

- **List Albums**: View a list of albums fetched from the JSONPlaceholder API.
- **Add Album**: Add a new album to the list.
- **Edit Album**: Modify the details of an existing album.
- **Delete Album**: Remove an album from the list.

The application uses **Redux-Toolkit** for state management, **React Router** for navigation, and **Tailwind CSS** for styling.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16.x or above)
- **npm** (Node Package Manager) or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd album-list
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## Features

- **Dynamic Album List**: Fetches album data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/albums).
- **Add Album**: Navigate to a form to add new albums to the list.
- **Edit Album**: Update album details.
- **Delete Album**: Remove albums with a click.
- **Responsive Design**: Styled with Tailwind CSS for a mobile-first responsive layout.

---

## Technologies Used

- **React**: Component-based UI library.
- **Redux-Toolkit**: State management.
- **React Router**: Navigation and routing.
- **Tailwind CSS**: Utility-first CSS framework.
- **JSONPlaceholder API**: Dummy API for testing.

---

## Project Structure

```plaintext
src
├── app
│   └── store.js               # Redux store setup
├── feature
│   └── Album
│       ├── component
│       │   ├── AlbumForm.js   # Form for adding/editing albums
│       │   └── AlbumList.js   # Displays the list of albums
│       ├── AlbumAPI.js        # API calls for album data
│       └── AlbumSlice.js      # Redux slice for albums
├── pages
│   ├── EditList.js            # Page for editing album list
│   ├── Home.js                # Homepage with album overview
│   └── Navbar.js              # Navigation bar component
├── App.js                     # Root component
├── index.js                   # Entry point
├── index.css                  # Tailwind CSS imports
```

---
