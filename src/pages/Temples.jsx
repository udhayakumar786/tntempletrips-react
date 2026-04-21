export default function Temples() {
    const navagraha = [
        { planet: "Sun", name: "Suryanar Koil", desc: "Worshipped for vitality, health, and leadership." },
        { planet: "Moon", name: "Thingalur", desc: "Associated with mental peace and emotional balance." },
        { planet: "Mars", name: "Vaitheeswaran Koil", desc: "For courage, marriage harmony, and curative powers." },
        { planet: "Mercury", name: "Thiruvenkadu", desc: "Blesses devotees with intelligence and communication skills." },
        { planet: "Jupiter", name: "Alangudi", desc: "Revered for wisdom, education, and spiritual growth." },
        { planet: "Venus", name: "Kanjanoor", desc: "Enhances prosperity, relationships, and artistic talents." },
        { planet: "Saturn", name: "Thirunallar", desc: "Famed for relief from Sade Sati and Saturn-related hardships." },
        { planet: "Rahu", name: "Thirunageswaram", desc: "Renowned for remedies related to Rahu Dosha." },
        { planet: "Ketu", name: "Keezhaperumpallam", desc: "Guides devotees toward inner clarity and spiritual growth." },
    ];

    return (
        <div className="container">
            <div className="glass-panel" style={{ textAlign: 'center' }}>
                <h1>Navagraha Temples Tour</h1>
                <p>A journey toward balance, faith, and harmony with cosmic energies.</p>
            </div>

            <div className="glass-panel">
                <h2>Significance and Purpose</h2>
                <p>The Navagraha temples are dedicated to the nine planetary deities who are believed to influence various aspects of human life.</p>
                <div className="temple-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    <div>
                        <h3 style={{ color: 'var(--gold)' }}>Salient Features</h3>
                        <ul style={{ color: 'white', paddingLeft: '20px' }}>
                            <li><strong>Unique Deity Concept:</strong> Grahas function under the supreme will of God.</li>
                            <li><strong>Astrological Relief:</strong> Prescribed remedies for health and career.</li>
                            <li><strong>Heritage:</strong> Ancient Chola architecture.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--gold)' }}>Why Visit?</h3>
                        <ul style={{ color: 'white', paddingLeft: '20px' }}>
                            <li>Relief from Sade Sati and Rahu-Ketu Doshas.</li>
                            <li>Gaining mental peace and strength.</li>
                            <li>Spiritual growth and alignment with dharma.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="glass-panel">
                <h2>The Navagraha Circuit around Kumbakonam</h2>
                <div className="temple-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {navagraha.map((t, i) => (
                        <div key={i} style={{ borderBottom: '1px solid var(--gold)', paddingBottom: '10px' }}>
                            <span className="planet-tag" style={{ background: 'var(--gold)', color: 'black', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8em', marginBottom: '10px', display: 'inline-block' }}>
                                {t.planet}
                            </span>
                            <h3>{t.name}</h3>
                            <p>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-panel">
                <h2>Other Renowned Spiritual Destinations</h2>
                <div className="temple-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div>
                        <h3>Chidambaram (Nataraja Temple)</h3>
                        <p>Represents the element of space (Akasha) and the cosmic dance of Lord Nataraja.</p>
                    </div>
                    <div>
                        <h3>Thirukkadaiyur (Abhirami Amman)</h3>
                        <p>Famous for Sashtiapthapoorthi (60th) and Sadabishekam ceremonies.</p>
                    </div>
                    <div>
                        <h3>Thiruvidaimaruthur (Mahalingeswarar)</h3>
                        <p>One of the largest Shiva temples, associated with liberation from sins.</p>
                    </div>
                    <div>
                        <h3>Thirukkarugavur (Garbarakshambigai)</h3>
                        <p>A sacred site for couples seeking childbirth and safe pregnancy protection.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}