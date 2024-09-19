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
    description: 'Hi, I am a Passionate software developer with a knack for creating dynamic and scalable web applications.Experience working alongside other developers and testers to build high-quality web products.I enjoy solving complex problmes.',
    // image: 'logo192.jpg', // Make sure to place an image in the public folder or use a URL
  };

  const skillsData = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML','Python', 'Django','MySQL','AWS', 'REST','APIS', 'Agile', 'GIT', 'JIRA', 'Software Development', 'Azure'];
  
  const experienceData = [
    {
        title: 'Video Sync',
        company: 'Lsquared Digital Signage',
        startDate: 'May 2023',
        endDate: 'June 2024',
        description: [
        'Leading the development of video sync feature to enable video play at same time on multiple Tv screens.',
        'Used Websocket brodcasting for signaling video to play at a scheduled time.',
        'Collaborating with cross-functional teams to define, design, and ship new feature.'
        ],
    },
      {
        title: 'Video Wall',
        company: 'CPP Investment',
        startDate: 'Jan 2021',
        endDate: 'April 2023',
        description: [
          'Video wall feature to enable video crop in different n:n or n:m sized and display in Tv screens placed together as video wall',
            'Developed and maintained digital signage applications using JavaScript and Python.',
            'Participated in the full software development lifecycle from planning to deployment.'
        ],
      },
      {
        title: 'API Test',
        company: 'Accenture',
        startDate: 'June 2018',
        endDate: 'May 2019',
        description: [
            'Developed Pytest cases in Python for testing REST api end-points.',
            'With ongoing deployments making sure the reliability of API and getting repots on test results.',
            'Automated testing with Docker containers for getting real time reporting.'
        ],
      },
  ];

  const contactData = {
    email: 'grishmapatel.0821@gmail.com',
    linkedIn: 'https://www.linkedin.com/grishma-patel-gp17',
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
