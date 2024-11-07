import Link from "next/link";
import { motion } from "framer-motion";

//next hooks
import { usePathname } from "next/navigation";
import Reveal from "./ui/Reveal";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name:  "Technical projects" },
  {path: "/misc", name: "Miscellaneous"}
  // { path: "/contact", name: "contact" },
];

const NavBar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname(); //this gives us the path user currently is
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Reveal>

          
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "10%" }} // Initial position of the underline (above the link)
                animate={{ y: 0 }} // Final position of the underline (aligned with the link)
                transition={{ type: "tween" }} // Animation transition type
                layoutId="underline" 
                className={`${underlineStyles}`} // Getting as a prop
              />
            )}
            {link.name}
          </Link>
          </Reveal>
        );
      })}
    </nav>
  );
};

export default NavBar;
