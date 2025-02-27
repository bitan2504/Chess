
# ♟️Chess

A simple chess game implemented using React.

## Features and Functionality

*   **Interactive Chessboard:** A fully functional 8x8 chessboard rendered using React components.
*   **Piece Movement:** Implements movement rules for all chess pieces (Pawn, Rook, Knight, Bishop, Queen, and King).
*   **Turn-Based Gameplay:** Alternates turns between White and Black players.
*   **Move Validation:** Validates moves according to chess rules, including checks for valid paths and piece collisions.
*   **Highlighting Valid Moves:** Highlights available moves for a selected piece.
*   **Check and Checkmate Detection:** Detects check and checkmate situations using hooks.
*   **Stalemate Detection:** Detects stalemate situations.
*   **Pawn Promotion:** Allows pawn promotion to Queen, Rook, Bishop, or Knight upon reaching the opposite end of the board.
*   **Castling:** Implements castling move for the King and Rook pieces.
*   **Responsive Design:** Adapts the board size to the screen size.

## Technology Stack

*   **React:** A JavaScript library for building user interfaces.
*   **JavaScript (ES6+):** The primary programming language.
*   **JSX:** A syntax extension to JavaScript, used to describe UI components.
*   **CSS:** For styling the application.
*   **Vite:** A build tool that provides a fast and efficient development experience.
*   **Context API:** For managing application state.

## Prerequisites

Before running the application, ensure you have the following installed:

*   **Node.js:** JavaScript runtime environment.  Download from [https://nodejs.org/](https://nodejs.org/)
*   **npm** (Node Package Manager): Usually comes with Node.js installation.
*   **Git:** Recommended for cloning the repository.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/bitan2504/Chess.git
    cd Chess
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage Guide

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will typically start the application at `http://localhost:5173/`.  Open this URL in your browser.

2.  **Playing the Game:**
    *   Click on a chess piece to select it.  Valid moves for the selected piece will be highlighted.
    *   Click on a highlighted square to move the piece to that location.
    *   The game automatically switches turns between White and Black.
    *   Pawn promotion prompts you to select the piece to promote to (Queen, Rook, Bishop, or Knight) when a pawn reaches the opposite rank.
    *   The game displays alerts for checkmate, stalemate, and when a player wins.

## 💡How to Contribute?
1.  Fork the repository.
2.  Create a new branch for your feature:

    ```bash
    git checkout -b feature-name
    ```
3.  Make changes and commit:
    ```bash
    git add .
    git commit -m "Added a new feature"
    ```
4.  Push to your branch:
    ```bash
    git push origin feature-name
    ```
5.  Create a Pull Request (PR) on GitHub.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## API Documentation

This project does not expose a public API.

## Contributing Guidelines

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes.
4.  Test your changes thoroughly.
5.  Submit a pull request with a clear description of your changes.

#### Feel free to explore, modify, and enhance the project! 😊
