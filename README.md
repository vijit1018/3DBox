# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# **3x3 Matrix Color Game (React)**  

A simple interactive game where you click on boxes in a 3x3 grid to change their colors. When all boxes are clicked, they turn orange in the order they were originally clicked.  

## **Features**  
✅ **3x3 grid of clickable boxes**  
✅ **Boxes turn green when clicked**  
✅ **When all boxes are clicked, they turn orange in sequence**  
✅ **Built with React (Hooks & Functional Components)**  

---

## **How to Run the Project**  

### **Prerequisites**  
- Node.js (v16 or later)  
- npm (comes with Node.js)  

### **Installation & Setup**  

1. **Clone the repository (if applicable)**  
   ```bash
   git clone https://github.com/your-username/matrix-game.git
   cd matrix-game
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the development server**  
   ```bash
   npm start
   ```
   - The app will open automatically at **[http://localhost:3000](http://localhost:3000)**.  

4. **Interact with the game**  
   - Click any white box to turn it **green**.  
   - Once all boxes are clicked, they will turn **orange one by one** in the order they were clicked.  

---

## **Project Structure**  
```
/src  
├── App.js          # Main React component  
├── MatrixGame.js   # Game logic & rendering (if split into a separate file)  
├── index.js        # React DOM renderer  
├── styles.css      # (Optional) Additional styling  
```  

---

## **Customization**  
- **Change colors**: Modify the `backgroundColor` in the `style` prop inside `MatrixGame.js`.  
- **Adjust delay between orange transitions**: Change the `500` (ms) in `setTimeout`.  
- **Grid size**: Modify the `matrix` state initialization (e.g., `Array(4).fill()` for 4x4).  

---

## **Possible Improvements**  
🔹 **Add a reset button** to replay the game.  
🔹 **Add animations** for smoother color transitions.  
🔹 **Track high scores** (e.g., fastest time to click all boxes).  

---

## **License**  
This project is open-source under the **MIT License**.  

---

## **Feedback & Contributions**  
Feel free to open an issue or submit a PR if you have improvements!  

🚀 **Happy Coding!**  

--- 

*(Replace placeholder links with actual demo GIFs or repository URLs when deploying.)*