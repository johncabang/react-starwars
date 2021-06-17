import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div className="app">
      <motion.div
        whileHover={{ scale: 1.8 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <h1>star wars</h1>
        <h5>react-query</h5>
      </motion.div>
    </div>
  );
}

export default App;
