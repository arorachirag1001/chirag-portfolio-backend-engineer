import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Chirag Arora
      </motion.h1>

      <h2>Senior Backend Engineer</h2>

      <p>
        Backend engineer with 6+ years of experience building scalable
        microservices, APIs, and distributed systems across PayPal, Walmart
        Global Tech, and Ericsson.
      </p>

      <div className="links">
        <a
          href="https://github.com/chirag-arora01"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/chirag-arora-1001/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <a href="mailto:arorachirag1001@gmail.com">
          <Mail size={20} />
          <span>Email</span>
        </a>
      </div>

      <section>
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>PayPal</strong> — Senior Software Engineer
            <br />
            Built onboarding APIs handling 1M+ users annually using Java,
            Spring Boot, and distributed microservices.
          </li>

          <li>
            <strong>Walmart Global Tech</strong> — Software Engineer
            <br />
            Developed backend APIs for Sellers Chargeback, improving transaction
            efficiency by 25%.
          </li>

          <li>
            <strong>Ericsson</strong> — Software Engineer
            <br />
            Built scalable microservices supporting 11M+ mobile subscribers.
          </li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <a
              href="https://github.com/gopinathsjsu/team-project-data-structure-deadheads"
              target="_blank"
              rel="noreferrer"
            >
              Airport Management System
            </a>
          </li>

          <li>
            <a
              href="https://github.com/prajwalnadagouda/Road-Trip-Planner"
              target="_blank"
              rel="noreferrer"
            >
              Road Trip Planner
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;