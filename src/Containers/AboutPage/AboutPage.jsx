
import './AboutPage.css'
import teamMembers from '../data/teamMembers';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to our website! This is the about page.</p>
      <img src="about-us-image.jpg" alt="About Us Image" />
      <h2>Our Team</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </li>
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>
    </div>
  );
};

export default AboutPage;