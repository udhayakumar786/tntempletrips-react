import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <section className="glass-panel hero" style={{
        background: "linear-gradient(rgba(0, 5, 30, 0.6), rgba(0, 5, 30, 0.6)), url('/Navagraha.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        alignItems: 'center',
        minHeight: '500px',
        padding: '20px'
      }}>
        <h1 style={{ margin: 0 }}>TNTEMPLETRIPS.IN</h1>
        <Link to="/booking" className="btn btn-primary">Plan Your Darshan</Link>
        <div>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#f0f0f0', fontWeight: 'bold' }}>
            A part of the earnings goes to charity (CCF Public Trust)
          </p>
          <p style={{ color: '#e0e0e0', marginBottom: 0 }}>
            Your trusted partner for divine pilgrimages, Shasthiyapthapoorthi, and Navagraha tours.
          </p>
        </div>
      </section>

      <div className="grid-3">
        <div className="glass-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '30px 20px' }}>
          <h2 style={{ marginBottom: '15px', minHeight: '3.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            Temple Tours
          </h2>
          <p style={{ lineHeight: '1.6', color: '#e0e0e0' }}>
            We cover all famous temples in Thanjavur, Thiruvarur, Mayiladuthurai, and Kumbakonam.
          </p>
        </div>

        <div className="glass-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '30px 20px' }}>
          <h2 style={{ marginBottom: '15px', minHeight: '3.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            Darshan & Special Poojas
          </h2>
          <p style={{ lineHeight: '1.6', color: '#e0e0e0' }}>
            We arrange seamless darshan, holy homams, and special poojas, managing all ritual logistics.
          </p>
        </div>

        <div className="glass-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', padding: '30px 20px' }}>
          <h2 style={{ marginBottom: '15px', minHeight: '3.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
            Milestone Celebrations
          </h2>
          <p style={{ lineHeight: '1.6', color: '#e0e0e0' }}>
            We organize sacred functions including Shasthiyapthapoorthi (60), Bheem Radha Shanthi (70), and Sadhabishekam (80).
          </p>
        </div>
      </div>

      <section className="glass-panel" style={{
        background: "linear-gradient(rgba(0, 5, 30, 0.6), rgba(0, 5, 30, 0.6)), url('/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ borderBottom: 'none', background: 'none', color: 'white' }}>Start Your Spiritual Journey</h2>
        <p style={{ color: '#f0f0f0', fontSize: '1.1rem' }}>
          Leave it to us. We have a team of well-experienced colleagues to make your tour memorable.
        </p>
        <div style={{ marginTop: '30px' }}>
          <a href="https://wa.me/919600521232" className="btn btn-whatsapp">Chat on WhatsApp</a>
          <a href="tel:+919442865823" className="btn btn-primary" style={{ marginLeft: '10px' }}>Call Now</a>
        </div>
      </section>
    </div>
  );
}