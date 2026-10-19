import { useState, useEffect, useRef } from "react";

export default function Homepage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* HEADER */}

            <header className="header" ref={headerRef}>
                <div className="logo">
                    <div className="logoIcon"></div>
                    <span>YOUR COMPANY HERE</span>
                </div>

                {/* Navigation */}

                <nav className={`navigation ${menuOpen ? "open" : ""}`}>
                    <a href="#home">HOME</a>
                    <a href="#cards">NEWS</a>
                    <a href="">ABOUT</a>

                    <button type="button" className="loginButton">
                        LOGIN / REGISTER
                    </button>
                </nav>

                {/* Mobile Navigation Button */}

                <button
                    type="button"
                    className="burgerMenu"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"} {/* Responsive menu button */}
                </button>
            </header>

            {/* MAIN */}
            <main id="home">
                {/* HERO SECTION */}
                <section className="hero">
                    <div className="heroContent">
                        <div>
                            <h1>THE MARKETING ASSOCIATION OF NEW ZEALAND</h1>
                            <h3>HELPING MARKETERS BE BRILLIANT SINCE 1974</h3>
                        </div>
                    </div>

                    {/* SEARCH SECTION */}

                    <div className="searchBar">
                        <input type="text" placeholder="" aria-label="Search" />

                        <button type="button">SEARCH</button>
                    </div>
                </section>

                {/* CARDS SECTION */}

                <section className="cardsSection" id="cards">
                    <h1>LATEST NEWS</h1>

                    <div className="cardsGrid">
                        {/* CARDS SHOULD LATER BE REPLACED WITH A MAP THAT FETCHES THE MOST RECENT ARTICLES FROM A DATABASE */}

                        {/* Card 1*/}

                        <a
                            className="card"
                            href="https://www.mi-3.com.au/22-10-2025/theyre-freaking-out-nz-telco-boss-jason-paris-takes-mobile-carrier-one-fully-agentic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.mi-3.com.au/sites/default/files/2025-10/Jason%20Paris%20and%20Marc%20Benioff%20-%20Dreamforce%202025%20-%20Lead%20Image%201.jpg"
                                alt="Card 1"
                            />

                            <div className="cardContent">
                                <h2>"They're freaking out!"</h2>
                                <p>
                                    One NZ’s partnership with Salesforce is
                                    transforming the workplace, with AI agents
                                    boosting productivity, cutting costs and
                                    taking over up to 50% of some employees’
                                    tasks.
                                </p>
                            </div>
                        </a>

                        {/* Card 2 */}

                        <a
                            className="card"
                            href="https://marketing.org.nz/news/government-increases-fair-trading-act-penalties-misleading-advertising"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://marketing.org.nz/hubfs/NZ-Government-Fair-Trading-Act.png"
                                alt="Card 2"
                            />

                            <div className="cardContent">
                                <h2>
                                    Penalties are increasing for breaches of
                                    Fair Trading Act.
                                </h2>
                                <p>
                                    New Zealand's Government plans tougher Fair
                                    Trading Act penalties, with businesses
                                    facing fines of up to $5 million or more for
                                    misleading and unfair practices.
                                </p>
                            </div>
                        </a>

                        {/* Card 3 */}

                        <a
                            className="card"
                            href="https://marketing.org.nz/news/can-your-customers-tell-youre-using-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://marketing.org.nz/hubfs/Canva%20images/Your-Customer-Use-AI.png"
                                alt="Card 3"
                            />

                            <div className="cardContent">
                                <h2>
                                    Your customers will know you are using AI!
                                </h2>
                                <p>
                                    Your audience will soon know when you’re
                                    using AI to help you write copy, create an
                                    image, or generate audio… and you can thank
                                    the EU for that!
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
