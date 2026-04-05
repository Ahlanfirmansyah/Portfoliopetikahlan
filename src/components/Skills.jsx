import React, { useState } from 'react';

function Skills() {
  const [active, setActive] = useState(null);
  
  const programmer = [
    { name: 'HTML + CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Laravel', level: 75 },
    { name: 'Figma', level: 70 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Flutter', level: 65 }
  ];
  
  const illustrator = [
    { name: 'Menggambar Digital', level: 85 },
    { name: 'Membuat Komik', level: 80 },
    { name: 'Desain Karakter', level: 75 },
    { name: 'Keychain Custom', level: 70 },
    { name: 'Stiker', level: 85 },
    { name: 'Webtoon', level: 75 }
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <span style={styles.titleDash}></span>
          My Skills
          <span style={styles.titleDash}></span>
        </h2>
        
        <div style={styles.header}>
          <button 
            onClick={() => setActive(active === 'programmer' ? null : 'programmer')}
            style={{
              ...styles.btn,
              ...(active === 'programmer' && styles.btnActive),
              borderColor: active === 'programmer' ? '#3b82f6' : '#e2e8f0'
            }}
          >
            <span style={styles.btnDot}></span>
            Programmer
            <span style={styles.btnArrow}>{active === 'programmer' ? '−' : '+'}</span>
          </button>
          
          <button 
            onClick={() => setActive(active === 'illustrator' ? null : 'illustrator')}
            style={{
              ...styles.btn,
              ...(active === 'illustrator' && styles.btnActive),
              borderColor: active === 'illustrator' ? '#8b5cf6' : '#e2e8f0'
            }}
          >
            <span style={styles.btnDot}></span>
            Ilustrator
            <span style={styles.btnArrow}>{active === 'illustrator' ? '−' : '+'}</span>
          </button>
        </div>
        
        {active === 'programmer' && (
          <div style={styles.skillContainer}>
            {programmer.map((skill, i) => (
              <div key={i} style={{...styles.skillItem, animationDelay: `${i * 0.05}s`}}>
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div style={styles.barContainer}>
                  <div style={{...styles.barFill, width: `${skill.level}%`}} />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {active === 'illustrator' && (
          <div style={styles.skillContainer}>
            {illustrator.map((skill, i) => (
              <div key={i} style={{...styles.skillItem, animationDelay: `${i * 0.05}s`}}>
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div style={styles.barContainer}>
                  <div style={{...styles.barFill, width: `${skill.level}%`, background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)'}} />
                </div>
              </div>
            ))}
          </div>
        )}
        
        <p style={styles.footer}>click to expand</p>
      </div>
      
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: '#ffffff',
    padding: '70px 0'
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '0 24px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '48px',
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  titleDash: {
    width: '40px',
    height: '2px',
    background: '#cbd5e1'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '32px'
  },
  btn: {
    padding: '12px 28px',
    borderRadius: '40px',
    fontSize: '0.95rem',
    fontWeight: 500,
    background: '#ffffff',
    color: '#475569',
    cursor: 'pointer',
    transition: '0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    border: '1.5px solid #e2e8f0',
    boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
  },
  btnActive: {
    background: '#f8fafc',
    color: '#1e293b',
    borderWidth: '1.5px'
  },
  btnDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#3b82f6',
    display: 'inline-block'
  },
  btnArrow: {
    fontSize: '1.1rem',
    fontWeight: 400,
    marginLeft: '4px'
  },
  skillContainer: {
    background: '#f8fafc',
    borderRadius: '20px',
    padding: '28px',
    marginTop: '8px',
    animation: 'slideDown 0.3s ease'
  },
  skillItem: {
    marginBottom: '22px',
    opacity: 0,
    animation: 'slideDown 0.3s ease forwards'
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  skillName: {
    color: '#334155',
    fontSize: '0.9rem',
    fontWeight: 500
  },
  skillPercent: {
    color: '#94a3b8',
    fontSize: '0.75rem',
    fontWeight: 500
  },
  barContainer: {
    background: '#e2e8f0',
    height: '6px',
    borderRadius: '10px',
    overflow: 'hidden'
  },
  barFill: {
    height: '100%',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
    transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  footer: {
    textAlign: 'center',
    marginTop: '32px',
    color: '#cbd5e1',
    fontSize: '0.7rem',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }
};

export default Skills;