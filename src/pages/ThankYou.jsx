import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ color: '#ffcc00', marginBottom: '20px' }}>Your Response Received!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Thank you for contacting Pleasant Stay Travels Services. <br />
          We will contact you via Phone/WhatsApp shortly.
        </p>
        <Link to="/" className="btn btn-primary">Return to Home</Link>
      </div>
    </div>
  );
}