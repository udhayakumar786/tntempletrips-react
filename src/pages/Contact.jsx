import { useState, useEffect } from 'react';

export default function Contact() {
    const [reviews, setReviews] = useState([]);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyBvF-wC34OiQxg33Vese0_5dJejaJ1iflAAaLgfGzZz88MtZS4aWrjukWnza1tx-7k/exec';

    useEffect(() => {
        fetch(scriptURL).then(res => res.json()).then(data => setReviews(data.reverse().slice(0, 50)));
    }, []);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const queryString = new URLSearchParams(formData).toString();
        fetch(`${scriptURL}?${queryString}`, { method: 'POST' }).then(() => {
            alert("Thank you! Your review has been posted.");
            e.target.reset();
        });
    };

    return (
        <div className="container">
            <div className="grid-2">
                <div className="glass-panel">
                    <h2>Reach Us</h2>
                    <p><strong>tntempletrips.in</strong><br />A part of the earnings goes to charity (CCF Public Trust)</p>
                    <hr style={{ margin: '20px 0', border: 0, borderTop: '1px solid var(--glass-border)' }} />
                    <p><strong>Email:</strong> <a href="mailto:presar8385@gmail.com" style={{ color: 'white' }}>presar8385@gmail.com</a></p>
                    <p><strong>Mobile:</strong> <span style={{ color: 'white' }}>97899 90370</span></p>
                    <p><strong>Mobile:</strong> <span style={{ color: 'white' }}>94428 65823</span></p>
                    <p><strong>WhatsApp:</strong> <span style={{ color: 'white' }}>96005 21232</span></p>
                    <div style={{ marginTop: '20px' }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62656.77708782354!2d79.34994270923067!3d10.960161494493396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5532b2f7036481%3A0x633519398000473e!2sKumbakonam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0, borderRadius: '10px' }} loading="lazy"></iframe>
                    </div>
                </div>

                <div className="glass-panel">
                    <h2>Leave a Review</h2>
                    <form onSubmit={handleReviewSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" required />
                        <div className="star-rating-box">
                            <label>Rate Your Experience</label>
                            <div className="star-rating">
                                {[5, 4, 3, 2, 1].map(num => (
                                    <span key={num}><input type="radio" id={`star${num}`} name="rating" value={num} /><label htmlFor={`star${num}`}>★</label></span>
                                ))}
                            </div>
                        </div>
                        <label>Review / Feedback</label>
                        <textarea name="feedback" rows="4" required></textarea>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Review</button>
                    </form>
                    <hr style={{ margin: '30px 0', border: 0, borderTop: '1px solid var(--glass-border)' }} />
                    <h3>Recent Guest Reviews</h3>
                    <div id="reviewsDisplay" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {reviews.map((r, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', marginBottom: '15px', border: '1px solid black' }}>
                                <strong style={{ color: '#fff' }}>{r.name}</strong>
                                <span style={{ color: '#ffd700', marginLeft: '10px' }}>{'★'.repeat(r.rating)}</span>
                                <p style={{ marginTop: '8px', fontSize: '0.9em', color: '#ddd' }}>{r.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}