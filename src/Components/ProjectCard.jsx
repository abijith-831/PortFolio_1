import React from 'react';
import { Col } from "react-bootstrap";
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, imgUrl, url }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Col size={12} sm={6} md={4}>
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
      </motion.div>
    </Col>
  );
};
export default ProjectCard;
