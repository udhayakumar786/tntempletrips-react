import { useState } from 'react';

export default function Booking() {
    const [status, setStatus] = useState("");
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxHOEznncnCN1m5zsiuM6-DTGo_XNFpaWpd0kmwd5btX5WfsRK1Y7qz3-6bXHsF_k0ONQ/exec';

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Submitting your inquiry...");
        const formData = new FormData(e.target);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(() => {
                setStatus("Success! We will contact you soon.");
                e.target.reset();
            })
            .catch(() => setStatus("Error submitting form. Please try again."));
    };

    return (
        <div className="container">
            <div className="glass-panel">
                <h1>Our Services & Arrangements</h1>
                <p>We provide end-to-end Services for your spiritual journey at a reasonable cost.</p>
                <div className="grid-2" style={{ marginTop: '20px' }}>
                    <div><h3 style={{ color: 'white' }}>A) Darshan & Poojas</h3><p>Conducting various poojas, homams, and darshan arrangements at all major temples.</p></div>
                    <div><h3 style={{ color: 'white' }}>B) Accommodation</h3><p>Stay at best Hotels / Lodges / Home Stays to meet your comfort needs.</p></div>
                    <div><h3 style={{ color: 'white' }}>C) Food</h3><p>Pure vegetarian food arrangements to meet your dietary requirements.</p></div>
                    <div><h3 style={{ color: 'white' }}>D) Travel</h3><p>Well-experienced cab operators for your travel needs.</p></div>
                </div>
            </div>

            <div className="grid-2">
                <div className="glass-panel" style={{ textAlign: 'center' }}>
                    <h2>Instant Booking</h2>
                    <p>Chat with us directly to customize your itinerary.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                        <a href="https://wa.me/919600521232" className="btn btn-whatsapp">WhatsApp: 96005 21232</a>
                        <a href="tel:+919442865823" className="btn btn-primary">Call: 94428 65823</a>
                        <a href="tel:+919789990370" className="btn btn-primary">Call: 97899 90370</a>
                        <a href="tel:+919597164125" className="btn btn-primary">Call: 95971 64125</a>
                    </div>
                </div>

                <div className="glass-panel">
                    <h2>Send an Inquiry</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Your Name</label>
                        <input type="text" name="name" required placeholder="Full Name" />
                        <label>Phone / WhatsApp</label>
                        <input type="tel" name="phone" required placeholder="Contact Number" />
                        <label>Interested Service</label>
                        <select name="service">
                            <option>Navagraha Tour</option>
                            <option>Thirunallar Pooja</option>
                            <option>60th/80th Birthday</option>
                            <option>General Temple Visit</option>
                        </select>
                        <label>Special Requirements</label>
                        <textarea name="message" rows="3" placeholder="Tell us about your travel dates..."></textarea>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Submit Inquiry</button>
                    </form>
                    {status && <div style={{ marginTop: '10px', color: 'white', textAlign: 'center', padding: '10px', background: 'rgba(255,255,255,0.1)' }}>{status}</div>}
                </div>
            </div>
        </div>
    );
}