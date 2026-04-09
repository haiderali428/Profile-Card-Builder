import React from 'react';


const ProfileCard = ({ name, title, bio, avatarColor, skills = [] }) => {
  return (
    <div className="card">
      <div 
        className="card__avatar" 
        style={{ backgroundColor: avatarColor || '#4A90E2' }}
      >
        <span style={{ fontSize: '2.5rem' }}>👤</span>
      </div>
      
      <h2 className="card__name" id="card-name-preview">
        {name || 'Your Name'}
      </h2>
      
      <p className="card__title">
        {title || 'Job Title'}
      </p>
      
      <p className="card__bio">
        {bio || 'No bio provided.'}
      </p>
      
      <div className="card__skills">
        {skills.map((skill, index) => (
          <span key={index} className="card__skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
