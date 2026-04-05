import React from 'react';

const programmerProjects = [
  { id: 1, title: 'Cek Daerah di indonesia', desc: 'dari provinsi hingga ke yg terdalam', tech: ['React', 'API'], url: 'https://ahlanfirmansyah.github.io/daerah-di-indonesiaa/' },
  { id: 2, title: 'Tixid', desc: 'Pembelian Tiket', tech: ['Laravel'], url: 'https://ahlanfirmansyah.github.io/Projek_Tixid_Ahlan/' },
  { id: 3, title: 'Keychain Custom', desc: 'Web Jualan', tech: ['HTML','JS', 'CSS'], url: 'https:// https://ahlanfirmansyah.github.io/opencommission/.demo.com' },
  { id: 4, title: 'Pariwisata', desc: 'taman safari', tech: ['React', 'Vite'], url: 'https://blog.demo.com' }
];

const illustratorProjects = [
  { id: 5, title: 'Webtoon Series', desc: 'Komik digital', tech: ['IbistPaint X'], url: 'https://www.webtoons.com/id/challenge/publish' },
  { id: 6, title: 'Character Design', desc: 'Desain karakter', tech: ['IbistPaint X'], url: 'https://www.instagram.com/likalikualan?igsh=ZTkzZDd3N3dpcXY0' },
  { id: 7, title: 'Keychain Custom', desc: 'Keychain custom', tech: ['Tradi'], url: 'https://www.instagram.com/likalikualan.studio?igsh=MWd0ZXhyZHpoMHVqcA==' },
  { id: 8, title: 'Sticker Pack', desc: 'Stiker digital', tech: ['  '], url: 'https://sticker.demo.com' }
];

function Projects() {
  return (
    <section id="projects" style={{ padding: '60px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px', color: '#1e293b' }}>Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Programmer */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#3b82f6' }}>Programmer</h3>
            {programmerProjects.map(p => (
              <a 
                key={p.id} 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.card}
              >
                <div>
                  <h4 style={styles.cardTitle}>{p.title}</h4>
                  <p style={styles.cardDesc}>{p.desc}</p>
                  <div style={styles.techList}>
                    {p.tech.map((t, i) => (
                      <span key={i} style={styles.tech}>{t}</span>
                    ))}
                  </div>
                </div>
                <span style={styles.arrow}>→</span>
              </a>
            ))}
          </div>
          
          {/* Ilustrator */}
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: '#8b5cf6' }}>Ilustrator</h3>
            {illustratorProjects.map(p => (
              <a 
                key={p.id} 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.card}
              >
                <div>
                  <h4 style={styles.cardTitle}>{p.title}</h4>
                  <p style={styles.cardDesc}>{p.desc}</p>
                  <div style={styles.techList}>
                    {p.tech.map((t, i) => (
                      <span key={i} style={{...styles.tech, background: '#f3e8ff', color: '#8b5cf6'}}>{t}</span>
                    ))}
                  </div>
                </div>
                <span style={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  card: {
    background: '#f8fafc',
    borderRadius: '12px',
    padding: '14px 16px',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    transition: '0.2s',
    border: '1px solid #eef2ff',
    cursor: 'pointer'
  },
  cardTitle: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '4px'
  },
  cardDesc: {
    fontSize: '0.75rem',
    color: '#64748b',
    marginBottom: '8px'
  },
  techList: {
    display: 'flex',
    gap: '6px',
    flexWrap: 'wrap'
  },
  tech: {
    background: '#eef2ff',
    padding: '2px 8px',
    borderRadius: '10px',
    fontSize: '0.6rem',
    color: '#3b82f6'
  },
  arrow: {
    color: '#cbd5e1',
    fontSize: '1rem',
    marginLeft: '12px'
  }
};

export default Projects;