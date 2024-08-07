import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
 
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mayank singh
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/mayank-singh6787/">
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a href="https://github.com/Mayank6787">
            <img src="/Git.png" alt="" />
          </a>
          <a href="https://dribbble.com/Mayank6787">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
