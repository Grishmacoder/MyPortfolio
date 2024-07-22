// src/components/Portfolio.js

import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const Portfolio = () => {
  const profileData = {
    name: 'Grishma Patel',
    title: 'Full-Stack Developer',
    description: 'Passionate developer with a knack for creating dynamic web applications.Experience working alongside other developers and testers to build high-quality web products.',
    // image: 'logo192.jpg', // Make sure to place an image in the public folder or use a URL
  };

  const skillsData = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML','Python', 'Django','MySQL','AWS', 'REST','APIS', 'Agile', 'GIT', 'JIRA', 'Software Development', 'Azure'];
  
  const experienceData = [
    {
        title: 'Full-Stack Developer',
        company: 'Lsquared Digital Signage',
        startDate: 'May 2023',
        endDate: 'June 2024',
        description: [
        'Leading the development of web applications using React and Node.js.',
        'Collaborating with cross-functional teams to define, design, and ship new features.',
        'Mentoring junior developers and conducting code reviews to ensure high code quality.'
        ],
    },
      {
        title: 'Software Engineer',
        company: 'CPP Investment',
        startDate: 'Jan 2021',
        endDate: 'April 2023',
        description: [
            'Developed and maintained web applications using JavaScript and Python.',
            'Participated in the full software development lifecycle from planning to deployment.',
            'Worked closely with clients to gather requirements and provide technical solutions.'
        ],
      },
      {
        title: 'Python Developer',
        company: 'Accenture',
        startDate: 'June 2018',
        endDate: 'May 2019',
        description: [
            'Developed and maintained web applications using JavaScript and Python.',
            'Participated in the full software development lifecycle from planning to deployment.',
            'Worked closely with Senior Developer to gather requirements and understand technical solutions.'
        ],
      },
  ];

  const contactData = {
    email: 'grishmapatel.0821@gmail.com',
    linkedIn: 'https://www.linkedin.com/gpatel',
    github: 'https://github.com/Grishmacoder',
  };

  return (
    <div className="portfolio">
      <Profile {...profileData} />
      <Skills skills={skillsData} />
      <Experience experiences={experienceData} />
      <Contact {...contactData} />
    </div>
  );
};

export default Portfolio;
