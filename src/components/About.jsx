import React from 'react';

function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Tentang Saya</h2>
        
        <div style={styles.card}>
          <p style={styles.text}>
            Saya Ahlan, seorang pelajar di SMKS Wikrama jurusan PPLG (Pengembangan Perangkat Lunak dan Gim).
            Selain mendalami dunia pemrograman, saya juga memiliki ketertarikan di bidang DKV, khususnya dalam hal menggambar. 
            Saat ini saya sedang mengerjakan komik webtoon sebagai bentuk ekspresi kreatif saya.
          </p>
          
          <p style={styles.text}>
            Menurut saya, antara logika coding dan imajinasi dalam menggambar bisa berjalan beriringan. 
            Keduanya melatih saya untuk teliti, kreatif, dan konsisten.
          </p>
          
          <p style={styles.text}>
            Webtoon yang saya buat masih dalam tahap pengembangan, tapi saya cukup serius menjalaninya. 
            Saya percaya bahwa konsistensi adalah kunci, baik dalam belajar coding maupun menyelesaikan sebuah cerita bergambar.
          </p>
          
          <p style={styles.text}>
            Saya masih terus belajar dan berkembang, dan saya menikmati prosesnya.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { background: '#f8fafc', padding: '60px 0' },
  container: { maxWidth: '800px', margin: '0 auto', padding: '0 20px' },
  title: { fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1e293b' },
  card: { background: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e2e8f0' },
  text: { marginBottom: '16px', lineHeight: 1.6, color: '#475569' }
};

export default About;