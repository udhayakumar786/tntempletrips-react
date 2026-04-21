import React, { useState, useEffect, useRef } from 'react';

const images = [
    "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg",
    "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg",
    "/gallery/9.jpg", "/gallery/10.jpg", "/gallery/11.jpg", "/gallery/12.jpg",
    "/gallery/13.jpg", "/gallery/15.jpg"
];

export default function Gallery() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [modalImg, setModalImg] = useState(null);
    const autoPlayRef = useRef();

    useEffect(() => {
        startTimer();
        return () => clearInterval(autoPlayRef.current);
    }, [slideIndex]);

    const startTimer = () => {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(() => moveSlide(1), 5000);
    };

    const moveSlide = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex >= images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;
        setSlideIndex(newIndex);
    };

    return (
        <div className="container">
            <div className="glass-panel" style={{ padding: '30px 20px', textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ backgroundColor: 'maroon', color: 'white', fontSize: '2.8rem', margin: '0 0 10px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', border: 'none', borderRadius: '10px', padding: '10px' }}>
                    Spiritual Glimpses
                </h1>
                <p style={{ color: '#ffff00', fontSize: '1.1rem', margin: 0, textShadow: '1px 1px 2px black', fontWeight: 'bold' }}>
                    Experience the divine architecture and ceremonies.
                </p>
            </div>

            <div className="slider-container" style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', maxWidth: '1000px', margin: '0 auto' }}>
                <div className="slider-wrapper" 
                     style={{ 
                        display: 'flex', 
                        transform: `translateX(-${slideIndex * 100}%)`, 
                        transition: 'transform 0.5s ease-in-out', 
                        aspectRatio: '16 / 9' /* Adjusted to match your screenshot ratio */
                     }}>
                    {images.map((src, i) => (
                        <div className="slide" key={i} style={{ minWidth: '100%', height: '100%' }}>
                            <img src={src} alt="Temple" 
                                 style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }} 
                                 onClick={() => setModalImg(src)} />
                        </div>
                    ))}
                </div>

                <button className="prev-btn" onClick={() => moveSlide(-1)}>❮</button>
                <button className="next-btn" onClick={() => moveSlide(1)}>❯</button>
            </div>

            <div className="dots-container">
                {images.map((_, i) => (
                    <span key={i} className={`dot ${slideIndex === i ? 'active' : ''}`} onClick={() => setSlideIndex(i)}></span>
                ))}
            </div>

            {/* FULLSCREEN LIGHTBOX MODAL */}
            {modalImg && (
                <div className="fullscreen-modal" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={() => setModalImg(null)}>
                    <span className="close-btn" style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', cursor: 'pointer' }} onClick={() => setModalImg(null)}>&times;</span>
                    <img src={modalImg} className="fullscreen-content" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} alt="Full size" />
                </div>
            )}
        </div>
    );
}