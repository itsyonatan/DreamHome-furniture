import './nav.css'
import { Link } from "react-router-dom";
import images from "../../data/images"
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { MenuToggle } from "../menuToggle/menutoggle";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.1,
      //ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.2,
      //ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const Menu = () => {
    return (
      <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </>
    )
  }
  return (
    <motion.div className="nav" animate={isOpen ? "open" : "closed"}>
      <div className="nav-content">
        <div className="logo">
          <Link to="/"><img src={images.logo} alt="logo" className="logo-image" /></Link>
        </div>
        <div className="row-menu-container">
          <ul className="flexCenter">
            <Menu />
          </ul>
        </div>
        <div className="navbar-menu">
          <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (<motion.div className="column-menu-container"
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit" >
          <ul className="flexColStart text"
            onClick={() => toggleOpen()}>
            <Menu />
          </ul>
        </motion.div>)
        }
      </AnimatePresence>
    </motion.div>
  )
}

/*<motion.li variants={itemsVariants}><Link to="/">Home</Link></motion.li>
<motion.li variants={itemsVariants}><Link to="/about">About Us</Link></motion.li>
<motion.li variants={itemsVariants}><Link to="/products">Products</Link></motion.li>
<motion.li variants={itemsVariants}><Link to="/blog">blog</Link></motion.li>
<motion.li variants={itemsVariants}><Link to="/contact">contact</Link></motion.li>*/