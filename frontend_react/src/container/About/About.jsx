import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

const abouts = [
  {
    title: "Machine Learning", 
    description: "I have experience in creating ML models for image classification, object detection, and text classification. I have also worked on NLP tasks for recommendation engine.", 
    imgUrl: images.about01
  },
  {
    title: "Web Developer", 
    description: "I have experience in creating web applications using React, TypeScript, and fastAPI.", 
    imgUrl: images.about02
  },
  {
    title: "Cloud Engineer", 
    description: "I have experience in using cloud services such as AWS, GCP for deploying applications and managing databases.",
    imgUrl: images.about03
  },
]

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know That <span>Good Data </span> and <span>ML Operations </span><br />brings <span>Great Impact on Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style= {{ marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style= {{ marginTop: 10}}>{about.description}</p>

          </motion.div>
        ))}

      </div>
    </>
  )
}

export default About
