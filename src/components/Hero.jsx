import React from 'react';

// Jika Anda menggunakan build tool seperti Webpack/Vite dan foto ada di folder 'src':
// import fotoProfil from './path/ke/foto-kamu.jpg'; 

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      background: '#ffffff'
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 24px',
      width: '100%'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '48px',
      flexWrap: 'wrap'
    },
    text: {
      flex: 1
    },
    greeting: {
      fontSize: '1rem',
      color: '#6b7280',
      marginBottom: '12px'
    },
    name: {
      fontSize: '3.2rem',
      marginBottom: '12px',
      lineHeight: 1.2
    },
    firstName: {
      color: '#1f2937'
    },
    lastName: {
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    role: {
      fontSize: '1.2rem',
      color: '#4b5563',
      marginBottom: '16px',
      fontWeight: 500
    },
    desc: {
      color: '#6b7280',
      maxWidth: '500px',
      marginBottom: '28px',
      lineHeight: 1.6
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    },
    btnPrimary: {
      background: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '10px 28px',
      borderRadius: '40px',
      fontSize: '0.95rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: '0.2s'
    },
    btnSecondary: {
      background: 'transparent',
      color: '#3b82f6',
      border: '1.5px solid #3b82f6',
      padding: '10px 28px',
      borderRadius: '40px',
      fontSize: '0.95rem',
      fontWeight: 500,
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block'
    },
    avatar: {
      flex: '0.7',
      display: 'flex',
      justifyContent: 'center'
    },
    // --- UPDATE PADA STYLES avatarCircle ---
    avatarCircle: {
      width: '250px', // Sedikit diperbesar agar foto terlihat jelas
      height: '250px',
      // Background gradient dipertahankan sebagai border/fallback
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 20px 30px -12px rgba(0,0,0,0.15)',
      overflow: 'hidden', // PENTING: Agar gambar tidak keluar dari lingkaran
      border: '4px solid white', // Memberikan efek bingkai putih di dalam gradient
    },
    // --- STYLE BARU UNTUK IMG ---
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // PENTING: Agar foto tidak gepeng dan memenuhi lingkaran
      objectPosition: 'center', // Memastikan wajah berada di tengah
    }
  };

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.text}>
            <p style={styles.greeting}>halo, I'm</p>
            <h1 style={styles.name}>
              <span style={styles.firstName}>Moh Ahlan</span>{' '}
              <span style={styles.lastName}>Firmansyah</span>
            </h1>
            <p style={styles.role}>Siswa SMKS Wikrama Bogor</p>
            <p style={styles.desc}>
              Siswa SMK Jurusan PPLG Yang mempunyai bakat menggambar
            </p>
            <div style={styles.buttons}>
              <button onClick={() => scrollToSection('contact')} style={styles.btnPrimary}>
                hubungi saya
              </button>
              <button onClick={() => scrollToSection('projects')} style={styles.btnSecondary}>
                lihat proyek
              </button>
            </div>
          </div>
          <div style={styles.avatar}>
            <div style={styles.avatarCircle}>
              {/* --- UPDATE: Ganti teks 'AF' dengan tag img --- */}
              <img 
                // CARA 1: Jika file foto ada di folder 'public'
                src="/ahlan.jpeg" 
                
                // CARA 2: Jika menggunakan import (buka komentar import di atas)
                // src={fotoProfil} 
                
                alt="Moh Ahlan Firmansyah" 
                style={styles.avatarImage} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;