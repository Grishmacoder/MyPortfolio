// src/components/Experience.js

import React from 'react';

const Experience = ({ experiences  }) => {
  return (
    <div className="experience">
     <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <h3>{experience.title} at {experience.company}</h3>
          <p>{experience.startDate} - {experience.endDate}</p>
         
          <ui>{experience.description.map((item, idx)=>(
            <li key={idx}>
                {item}
            </li>

          ))}</ui>
        </div>
      ))}
    </div>
  );
};

export default Experience;
