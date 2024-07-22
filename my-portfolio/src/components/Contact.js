// src/components/Contact.js

import React from 'react';

const Contact = ({ email, linkedIn, github }) => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <p>
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
                <strong>LinkedIn:</strong> <a href={linkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a>
            </p>
            <p>
                <strong>GitHub:</strong> <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
            </p>
        </div>
    );
};

export default Contact;
