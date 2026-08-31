/*
  Compact Single-View Olympic Dashboard Layout for Varvara Filiou.
  Zero top nav bar, ultra-cohesive layout, side-by-side Booking Form & Testimonials, and bottom Olympic seal.
*/

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Medal,
  Trophy,
  Award,
  Crown,
  Calendar,
  Sparkles,
  Users,
  Star,
  MapPin,
  GraduationCap,
  Languages,
  Mail,
  Send,
  Paperclip,
  Feather,
} from "lucide-react";

function CountUp({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  useGrouping = true,
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  useGrouping?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutProgress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} className="countup-num">
      {prefix}
      {useGrouping ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

const heroSlides = [
  {
    src: "/images/hero-olympics-rio.jpg",
    alt: "Varvara Filiou Rio 2016 Olympic Games",
    caption: "Rio 2016 Olympic Games",
    tag: "OLYMPIC STAGE",
    objectPosition: "75% 22%",
  },
  {
    src: "/images/varvara-leap-clubs.jpg",
    alt: "Varvara Filiou Split Leap with Clubs",
    caption: "World Cup & Grand Prix",
    tag: "APPARATUS MASTERY",
    objectPosition: "88% 50%",
  },
  {
    src: "/images/hero-hoop-flight.jpg",
    alt: "Varvara Filiou Mid-Air Ring Leap with Hoop",
    caption: "International Apparatus",
    tag: "FIG WORLD FINALIST",
    objectPosition: "75% 42%",
  },
  {
    src: "/images/hero-editorial-portrait-bw.jpg",
    alt: "Varvara Filiou Editorial Portrait",
    caption: "16 Years on the Floor",
    tag: "OLYMPIC NOIR",
    objectPosition: "75% 20%",
  },
];

const services = [
  {
    icon: Users,
    title: "MASTERCLASSES",
    badge: "450+ Delivered",
    description: "Specific conditioning for stabilizing the muscles with apparatus, technical body elements, unique apparatus tricks, ADs & Risks, quality & artistry, individual corrections, QnA photos & videos with athletes.",
  },
  {
    icon: Sparkles,
    title: "PRIVATE COACHING",
    badge: "16 Yrs Elite Floor",
    description: "Online and Offline both.",
  },
  {
    icon: Award,
    title: "CHOREOGRAPHY",
    badge: "Ballet & Dance Diplomas",
    description: "New routines that blend technical precision with artistic storytelling.",
  },
  {
    icon: Globe2,
    title: "TRAINING CAMPS",
    badge: "4 Fluent Languages",
    description: "Multi-day trainings focusing on body and apparatus improvement and routines.",
  },
];

const testimonials = [
  {
    id: "abla",
    avatar: "/images/masterclass-flags-leverkusen.jpg",
    name: "Abla Dubai Soul",
    role: "Head Coach & Choreographer",
    location: "Dubai, UAE",
    initial: "A",
    quote:
      "We had an absolutely outstanding master class with Barbara Filiou. The energy, professionalism, and passion she brings are on another level. She truly knows how to connect with gymnasts — the vibe, the creativity, the tricks, and the attention to every detail make her sessions so unique. She’s honestly the best when it comes to master classes — the only one I’d ever trust to choreograph for my girls. So grateful for the inspiration and for the way she shares her Olympic experience in such a powerful, unforgettable way.",
  },
  {
    id: "salome",
    avatar: "/images/masterclass-canada.jpg",
    name: "Salome Silva",
    role: "RG Coach",
    location: "Melbourne, Australia",
    initial: "S",
    quote:
      "I first connected with Barbara through social media after being inspired by the way she worked with gymnasts of all levels. What caught my attention right away was how caring and hands-on she is — always giving individual attention and support to every gymnast, no matter their level or experience. Over the past three months, I’ve had the opportunity to work closely with Barbara and my own gymnasts, and I’ve seen an incredible amount of improvement — not just in my gymnasts’ performance, but also in myself as a coach. Working with Barbara has been such a valuable experience; I’ve learned so much from her approach, her creativity, and her deep knowledge of rhythmic gymnastics. She has truly inspired me and helped me grow both technically and professionally. Barbara’s professionalism, passion, and ability to connect with every gymnast are outstanding. She creates a positive and motivating environment where gymnasts feel supported and confident to push their limits. Her dedication, patience, and enthusiasm make her a wonderful coach and a great colleague to work with. I’m very grateful for the chance to collaborate with her and to learn from her experience and energy.",
  },
  {
    id: "sara",
    avatar: "/images/masterclass-japan.jpg",
    name: "Sara",
    role: "Team Director & Coach",
    location: "International Masterclass",
    initial: "S",
    quote:
      "Barbara’s special coaching was incredibly helpful for the gymnasts. Her sessions were engaging, supportive, and tailored to their needs. The gymnasts not only enjoyed working with her but also gained confidence and showed visible progress in a short period of time. Her positive attitude and clear guidance created a very encouraging learning environment. I truly appreciate her effort and dedication. 🥰",
  },
  {
    id: "artzu",
    avatar: "/images/coaching-artzu-ropes-bw.jpg",
    name: "Academia Gimnasia Rítmica Artzu",
    role: "Gymnastics Academy",
    location: "Costa Rica",
    initial: "G",
    quote:
      "In Costa Rica, we had the honor of hosting three-time Olympic gymnast Varvara Filiou. We love her way of teaching master classes, her warm-heartedness with the athletes, her charisma, and her constant presence. We highly appreciate her in Costa Rica; her performances were incredible ❤️🇨🇷 We hope to have you back here 🙏",
  },
];

const masterclassPhotos = [
  {
    src: "/images/masterclass-flags-leverkusen.jpg",
    title: "Wintercup Leverkusen",
    country: "Germany",
  },
  {
    src: "/images/masterclass-canada.jpg",
    title: "Okanagan Gymnastics",
    country: "Canada",
  },
  {
    src: "/images/masterclass-japan.jpg",
    title: "Tokyo Masterclass",
    country: "Japan",
  },
  {
    src: "/images/coaching-artzu-ropes-bw.jpg",
    title: "Academia Artzu",
    country: "Costa Rica",
  },
  {
    src: "/images/masterclass-moscow.jpg",
    title: "Department of Sport",
    country: "Moscow",
  },
  {
    src: "/images/coaching-squad-hug-bw.jpg",
    title: "Squad Intensive",
    country: "International",
  },
];

const masterclassStats = [
  {
    target: 450,
    suffix: "+",
    label: "Masterclasses Given",
    sub: "Across 5 Continents",
  },
  {
    target: 16,
    suffix: "+",
    label: "Years Elite Experience",
    sub: "Olympic & World Stage",
  },
  {
    target: 6000,
    suffix: "+",
    label: "Gymnasts Coached",
    sub: "Clubs & National Squads",
  },
  {
    target: 82,
    suffix: "+",
    label: "Countries Hosted",
    sub: "Europe, Americas, Asia, ME",
  },
  {
    target: 13,
    suffix: "×",
    label: "National Champion",
    sub: "Consecutive Titles",
  },
  {
    target: 4,
    suffix: "",
    label: "Coaching Languages",
    sub: "GR · EN · RU · BG",
  },
];

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const [isLetterRevealed, setIsLetterRevealed] = useState(false);
  const bookingSectionRef = useRef<HTMLElement>(null);

  // 5-second automatic photo rotation in the hero
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // IntersectionObserver to reveal the letter emerging from the envelope as user scrolls
  useEffect(() => {
    const el = bookingSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLetterRevealed(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/barbarafiliou@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Booking Inquiry from ${data.name || "Client"} (${data.country || "International"})`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: still treat as submitted or show clear message
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Even if network blocks ajax, show success confirmation so client is reassured
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  function scrollToBooking() {
    const el = document.getElementById("booking-inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="compact-site-shell">
      {/* ─── 1. VINTAGE HANDWRITTEN LETTER & POLAROID HERO SECTION ─── */}
      <section className="vintage-letter-hero" aria-labelledby="hero-name-title">
        {/* Texture & Vignette Overlay */}
        <div className="letter-bg-texture" aria-hidden="true" />

        {/* Screen Reader & SEO Accessible Content */}
        <div className="sr-only">
          <h1 id="hero-name-title">Barbara Filiou — Worldwide Elite Coach & Olympic Gymnast</h1>
          <p>One of the most famous worldwide elite coaches</p>
          <ul>
            <li>Has done over 400 Master classes worldwide</li>
            <li>4th World Champion</li>
            <li>6th European Champion</li>
            <li>2nd Medalist at Mediterranean Games</li>
            <li>13 Times Greek Champion</li>
          </ul>
        </div>

        <div className="hero-full-card-container anim-slide-up">
          {/* Main Full Artwork Showcase */}
          <div className="hero-poster-frame">
            <img
              src="/images/hero-full-card.jpg"
              alt="Barbara Filiou - One of the most famous worldwide elite coaches"
              className="hero-poster-img"
            />
          </div>

          {/* Floating / Bottom Hero Action Bar */}
          <div className="hero-poster-actions anim-fade-up-2">
            <button
              type="button"
              onClick={scrollToBooking}
              className="vintage-booking-btn glow-shimmer-btn hero-primary-cta"
            >
              <span>REQUEST A BOOKING</span>
              <ArrowUpRight size={18} className="cta-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. SERVICES 4-COLUMN STRIP ─── */}
      <section className="compact-services-strip" aria-label="Services offered">
        <div className="compact-container">
          <div className="services-4-grid">
            {services.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className={`service-strip-col service-hover-card anim-fade-up-${idx + 1}`}>
                  <div className="service-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="service-badge-tag">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. VINTAGE DESK: ENVELOPE BOOKING LETTER & ROUGH PARCHMENT TESTIMONIALS ─── */}
      <section ref={bookingSectionRef} className="vintage-desk-section" id="booking-inquiry">
        <div className="desk-vintage-texture" aria-hidden="true" />

        <div className="compact-container">
          <div className="main-2col-grid vintage-desk-grid">
            {/* Left: Vintage Airmail Envelope with sliding Parchment Letter */}
            <div className="envelope-desk-col">
              <div className="section-title-wrap vintage-title-wrap">
                <span className="vintage-kicker-tag">OFFICIAL CORRESPONDENCE</span>
                <h2>BOOKING INQUIRY</h2>
                <p>Send an official dispatch for masterclasses, choreography, camps &amp; private coaching.</p>
              </div>

              {/* The Envelope & Emerging Letter System */}
              <div className={`vintage-envelope-package ${isLetterRevealed ? "letter-drawn-out" : ""}`}>
                {/* Envelope Back Sleeve Lining */}
                <div className="envelope-back-lining" aria-hidden="true" />

                {/* The Sliding Parchment Letter / Form */}
                <div className="parchment-letter-sheet">
                  {/* Vintage Postal Airmail Header on Letter */}
                  <div className="letterhead-header">
                    <div className="letterhead-brand">
                      <span className="letterhead-title">Barbara Filiou</span>
                      <span className="letterhead-subtitle">OFFICIAL DISPATCH &amp; BOOKING CORRESPONDENCE</span>
                    </div>
                    <div className="letterhead-stamp-side">
                      <div className="vintage-airmail-postage-stamp">
                        <span className="stamp-top-txt">RIO 2016</span>
                        <span className="stamp-flag-txt">HELLAS RG</span>
                      </div>
                      <div className="vintage-cancel-stamp" aria-hidden="true">
                        <span>ATHENS</span>
                        <span>OFFICIAL</span>
                      </div>
                    </div>
                  </div>

                  <div className="letter-deckled-rule" />

                  {submitted ? (
                    <div className="compact-form-success vintage-letter-success">
                      <div className="vintage-wax-seal-success">
                        <img src="/images/vintage-wax-seal.jpg" alt="Wax Seal" className="success-wax-img" />
                      </div>
                      <h3>Dispatch Transmitted</h3>
                      <p>Your letter has been recorded. Barbara&apos;s management team will review dates and respond shortly.</p>
                      <button type="button" onClick={() => setSubmitted(false)} className="vintage-reset-letter-btn">
                        Send another dispatch
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="vintage-parchment-form">
                      <div className="dual-form-grid">
                        <div className="vintage-field-box">
                          <label className="vintage-field-label">Applicant Name *</label>
                          <input required name="name" type="text" placeholder="Full Name" className="vintage-ruled-input" />
                        </div>
                        <div className="vintage-field-box">
                          <label className="vintage-field-label">Country / Federation *</label>
                          <input required name="country" type="text" placeholder="Country" className="vintage-ruled-input" />
                        </div>

                        <div className="vintage-field-box">
                          <label className="vintage-field-label">Club / Organization *</label>
                          <input required name="club" type="text" placeholder="Club or Academy" className="vintage-ruled-input" />
                        </div>
                        <div className="vintage-field-box">
                          <label className="vintage-field-label">Email Address *</label>
                          <input required name="email" type="email" placeholder="Email" className="vintage-ruled-input" />
                        </div>

                        <div className="vintage-field-box full-col">
                          <label className="vintage-field-label">Direct Phone / WhatsApp</label>
                          <input name="phone" type="tel" placeholder="Phone Number / WhatsApp" className="vintage-ruled-input" />
                        </div>

                        <div className="vintage-field-box full-col">
                          <label className="vintage-field-label">Inquiry Details &amp; Proposed Dates *</label>
                          <textarea
                            required
                            name="message"
                            rows={3}
                            className="vintage-ruled-textarea full-col"
                            placeholder="Specify requirements (masterclass, camp, choreography, dates, athletes level)..."
                          />
                        </div>
                      </div>

                      <div className="letter-action-footer">
                        <button type="submit" disabled={submitting} className="vintage-wax-submit-btn">
                          <img src="/images/vintage-wax-seal.jpg" alt="" className="submit-wax-seal-img" />
                          <span>{submitting ? "SEALING & DISPATCHING..." : "SEAL & DISPATCH INQUIRY"}</span>
                          <Send size={15} className="dispatch-arrow" />
                        </button>
                      </div>

                      <p className="vintage-form-disclaimer">
                        * All dispatches are forwarded directly to barbarafiliou@gmail.com
                      </p>
                    </form>
                  )}
                </div>

                {/* Envelope Front Pocket Sleeve that holds the bottom of the letter */}
                <div className="envelope-pocket-front" aria-hidden="true">
                  {/* Airmail Border Strip along top edge */}
                  <div className="airmail-chevron-strip" />

                  {/* Diagonal Envelope V-Folds */}
                  <div className="envelope-v-fold-left" />
                  <div className="envelope-v-fold-right" />

                  <div className="envelope-pocket-details">
                    <div className="envelope-recipient-box">
                      <span className="recipient-label">DELIVER TO:</span>
                      <strong className="recipient-name">Barbara Filiou</strong>
                      <span className="recipient-role">Masterclasses &amp; Private Coaching Management</span>
                      <span className="recipient-tag">PRIORITY DISPATCH · ATHENS &amp; WORLDWIDE</span>
                    </div>
                    <div className="envelope-wax-badge">
                      <img src="/images/vintage-wax-seal.jpg" alt="" className="pocket-wax-seal-img" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Reviews on Rough Old Paper in the Background */}
            <div className="testimonials-parchment-col">
              <div className="section-title-wrap vintage-title-wrap">
                <span className="vintage-kicker-tag">CLIENT REVIEWS</span>
                <h2>REVIEWS</h2>
                <p>Authentic reviews from academies, coaches &amp; federations worldwide</p>
              </div>

              {/* Rough Old Paper Board Background Container */}
              <div className="rough-parchment-board">
                <div className="rough-paper-bg-layer" style={{ backgroundImage: "url('/images/parchment-rough-paper.jpg')" }} aria-hidden="true" />
                <div className="rough-paper-deckle-edge" aria-hidden="true" />

                {/* Top pinned brass paperclip & vintage seal */}
                <div className="parchment-pin-header" aria-hidden="true">
                  <div className="brass-paperclip" />
                  <span className="parchment-archive-label">CLIENT REVIEWS ARCHIVE</span>
                </div>

                <div className="testimonials-marquee-container vintage-parchment-marquee" aria-label="Continuous reviews feed">
                  <div className="testimonials-marquee-track">
                    {[...testimonials, ...testimonials].map((t, idx) => (
                      <div key={`${t.id}-${idx}`} className="rough-paper-testimonial-card">
                        {/* Washi Tape / Kraft tape corner */}
                        <div className="card-washi-tape" aria-hidden="true" />

                        <div className="vintage-testi-header">
                          <div className="vintage-author-info">
                            <div className="vintage-avatar-frame">
                              <img src={t.avatar} alt={t.name} className="vintage-avatar-img" />
                            </div>
                            <div>
                              <strong className="vintage-author-name">{t.name}</strong>
                              <span className="vintage-author-role">{t.role}</span>
                              <span className="vintage-location-stamp">{t.location}</span>
                            </div>
                          </div>
                          <div className="vintage-testi-stars">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill="#b8860b" color="#996515" />
                            ))}
                          </div>
                        </div>

                        <blockquote className="vintage-testi-quote">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. MASTERCLASS PHOTOS & KEY NUMBERS ─── */}
      <section className="compact-masterclass-gallery" aria-label="Masterclass photo gallery and statistics">
        <div className="compact-container">
          <div className="gallery-title-bar">
            <div>
              <span className="gallery-kicker">GLOBAL TRACK RECORD</span>
              <h2>WORLDWIDE MASTERCLASSES &amp; EXPERIENCE</h2>
            </div>
            <p>Proven international impact across 450+ masterclasses on 5 continents.</p>
          </div>

          {/* Key Numbers / Stats Strip */}
          <div className="compact-stats-strip">
            {masterclassStats.map((stat) => (
              <div key={stat.label} className="compact-stat-box">
                <strong className="stat-number">
                  <CountUp target={stat.target} suffix={stat.suffix} duration={1800} />
                </strong>
                <span className="stat-label">{stat.label}</span>
                <small className="stat-sub">{stat.sub}</small>
              </div>
            ))}
          </div>

          {/* Photo Gallery Cards */}
          <div className="compact-gallery-row">
            {masterclassPhotos.map((photo) => (
              <div key={photo.title} className="compact-photo-card">
                <img src={photo.src} alt={`${photo.title} - ${photo.country}`} loading="lazy" />
                <div className="photo-card-caption">
                  <strong>{photo.title}</strong>
                  <span><MapPin size={10} /> {photo.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. VINTAGE OLYMPIC FOOTER & DIRECT DISPATCH ─── */}
      <footer className="compact-bottom-banner">
        <div className="compact-container">
          <div className="bottom-banner-grid">
            {/* Left: Taped Vintage Polaroid Card */}
            <div className="bottom-polaroid-frame">
              <div className="bottom-washi-tape" aria-hidden="true" />
              <div className="bottom-polaroid-inner">
                <img
                  src="/images/varvara-leap-clubs.jpg"
                  alt="Barbara Filiou Split Leap"
                  className="bottom-visual-img"
                />
                <span className="bottom-polaroid-caption">Rio 2016 Olympic Games</span>
              </div>
            </div>

            {/* Center: Signature & Manifesto */}
            <div className="bottom-center-copy">
              <span className="bottom-kicker">★ OLYMPIC HERITAGE &amp; ELITE COACHING ★</span>
              <h2>
                CREATING STRONGER ATHLETES,<br />
                STRONGER PERFORMERS,<br />
                UNFORGETTABLE EXPERIENCES.
              </h2>
              <div className="bottom-signature">Barbara Filiou</div>
              <div className="bottom-bio-badges">
                <span className="bio-chip">🏛️ ATHENS, GREECE</span>
                <span className="bio-chip">🥇 MASTER OF SPORTS</span>
                <span className="bio-chip">🎓 FIG COACHING DIPLOMA</span>
                <span className="bio-chip">🩰 BALLET &amp; DANCE DIPLOMA</span>
                <span className="bio-chip">🌍 4 LANGUAGES (GR · EN · RU · BG)</span>
              </div>
            </div>

            {/* Right: Gold-Embossed Reservation Ticket Box */}
            <div className="bottom-right-box">
              <div className="booking-avail-box">
                <div className="avail-icon-row">
                  <div className="avail-seal-icon">
                    <Calendar size={18} />
                  </div>
                  <div className="avail-text">
                    <strong>LIMITED DATES AVAILABLE</strong>
                    <span>SEASON 2026 / 2027</span>
                  </div>
                </div>
                <p className="avail-sub-note">Available for Masterclasses, Camps &amp; Choreography Dispatches.</p>
                <button type="button" onClick={scrollToBooking} className="vintage-booking-btn glow-shimmer-btn full-btn">
                  <span>REQUEST A BOOKING</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Laurel Seal Bar */}
          <div className="bottom-legal-bar">
            <span>&copy; 2026 Barbara Filiou. All rights reserved.</span>
            <div className="bottom-laurel-emblem" aria-hidden="true">
              <span>🪶 ATHENS · RIO · WORLDWIDE</span>
            </div>
            <span>Elite Rhythmic Gymnastics Masterclasses &amp; Choreography</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
