import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 border-b border-gray-300  text-cyan-300">
      <div className="navigation flex gap-8">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset here
          className="cursor-pointer hover:text-cyan-500"
        >
          HOME
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset here
          className="cursor-pointer hover:text-cyan-500"
        >
          ABOUT ME
        </ScrollLink>
        <ScrollLink
          to="technologies"
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset here
          className="cursor-pointer hover:text-cyan-500"
        >
          TECHNOLOGIES
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset here
          className="cursor-pointer hover:text-cyan-500"
        >
          PROJECTS
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70} // Adjust the offset here
          className="cursor-pointer hover:text-cyan-500"
        >
          CONTACT
        </ScrollLink>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a href="https://github.com/bemnet449" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-900" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com/bonvack01" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
