import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import {
  FaEye,
  FaGlasses,
  FaCar,
  FaChild,
  FaBuilding,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const images = [
  "/TTP_images/image2.jpeg",
  "/TTP_images/image3.jpeg",
  "/TTP_images/image10.jpeg",
  "/TTP_images/image11.jpeg",
  "/TTP_images/image12.jpeg",
  "/TTP_images/image13.jpeg",
  "/TTP_images/image14.jpeg",
  "/TTP_images/image5.jpeg",
  "/TTP_images/image6.jpeg",
  "/TTP_images/image4.jpeg",
  "/TTP_images/image7.jpeg",
  "/TTP_images/image8.jpeg",
  "/TTP_images/image9.jpeg",
  "/TTP_images/image10.jpeg",
  "/TTP_images/image2.jpeg",
  "/TTP_images/image3.jpeg",
  "/TTP_images/image10.jpeg",
  "/TTP_images/image11.jpeg",
];

const testimonials = [
  {
    text: "Exceptional service! Thandeka Mbuyazi was thorough and explained everything clearly. The virtual try-on feature helped me choose the perfect frames. Highly recommend!",
    author: "Zizipho Mitchell",
  },
  {
    text: "Been coming here for 3 years. The staff is friendly, appointments are always on time, and they have the latest technology. My whole family trusts VisionCare.",
    author: "Vusi Khumalo",
  },
  {
    text: "Amazing experience with my contact lens fitting. They took time to ensure perfect comfort and provided excellent aftercare. The online booking system is so convenient!",
    author: "Bongiwe Ntuli",
  },
  {
    text: "Professional, modern clinic with state-of-the-art equipment. The comprehensive eye exam detected an issue early. Grateful for their expertise and care.",
    author: "David Mbeki",
  },
  {
    text: "Love the wide selection of designer frames and the helpful staff. The lense is incredible - I could see exactly how the glasses would look!",
    author: "Tumi Mokoena",
  },
  {
    text: "Excellent pediatric care for my daughter. The optometrist was patient and gentle, making the experience comfortable for her. Highly professional service.",
    author: "James Mthembu",
  },
];

const iconMap = {
  "fa-eye": <FaEye />,
  "fa-glasses": <FaGlasses />,
  "fa-car": <FaCar />,
  "fa-child": <FaChild />,
  "fa-building": <FaBuilding />,
};

const serviceCards = [
  {
    icon: "fa-eye",
    title: "Comprehensive Eye Examinations",
    desc: "Your vision matters. Our expert team ensures your eyes are healthy with thorough examinations using state-of-the-art equipment.",
    items: [
      "Digital retinal imaging",
      "Glaucoma screening",
      "Visual Field testing",
    ],
  },
  {
    icon: "fa-glasses",
    title: "Contact Lens Fittings",
    desc: "Professional contact lens consultations and fittings for optimal comfort and vision correction.",
    items: [
      "Daily, weekly & monthly lenses",
      "Specialty lenses",
      "Follow-up care",
    ],
  },
  {
    icon: "fa-car",
    title: "Drivers Test",
    desc: "Get ready for success with our interactive driver’s test platform.",
    items: ["Real-time preview", "360° view", "Share with friends"],
  },
  {
    icon: "fa-child",
    title: "Pediatric Eye Care",
    desc: "Specialized eye care for children with gentle, child-friendly examination techniques.",
    items: [
      "School screenings",
      "Learning disability assessments",
      "Myopia management",
    ],
  },
  {
    icon: "fa-building",
    title: "Corporate Eye Care",
    desc: "On-site eye examinations and vision screenings for businesses and organizations.",
    items: [
      "Group bookings",
      "Health & safety compliance",
      "Flexible scheduling",
    ],
  },
  {
    icon: "fa-eye",
    title: "Dry Eye Treatment",
    desc: "Advanced treatments for dry eye syndrome using the latest therapeutic approaches.",
    items: ["IPL therapy", "Punctal plugs", "Prescription treatments"],
  },
];

const packages = {
  kids: {
    image: "/TTP_images/image.webp",
    title: "Kids Promo",
    price: "R699",
    age: "Ages 8-19 years",
    desc: "Complete eye care package for children and teenagers",
    items: [
      "1x Full eye examination",
      "1x Standard single vision clear lenses",
      "1x Classic frame (silver and gold options)",
      "Professional fitting and adjustment",
    ],
    link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Kids+Special+Package+%28R699%29+for+ages+8-19.+Can+you+please+provide+more+details+and+help+me+book+an+appointment%3F&type=phone_number&app_absent=0",
  },
  pensioner: [
    {
      image: "/TTP_images/image2.jpeg",
      title: "Single Vision",
      price: "R899",
      items: [
        "Full eye examination",
        "Single vision lenses",
        "Frame selection",
        "Professional service",
      ],
      link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Pensioner+Single+Vision+Package+%28R899%29&type=phone_number&app_absent=0",
    },
    {
      image: "/TTP_images/image16.jpeg",
      title: "Bifocal",
      price: "R1199",
      items: [
        "Full eye examination",
        "Bifocal lenses",
        "Frame selection",
        "Professional fitting",
      ],
      link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Pensioner+Bifocal+Package+%28R1199%29&type=phone_number&app_absent=0",
    },
    {
      image: "/TTP_images/multifocal.jpeg",
      title: "Multifocal",
      price: "R1999",
      items: [
        "Full eye examination",
        "Progressive multifocal lenses",
        "Premium frame selection",
        "Advanced fitting",
      ],
      link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Pensioner+Multifocal+Package+%28R1999%29&type=phone_number&app_absent=0",
    },
  ],
  normal: [
    {
      image: "/TTP_images/normal2.jpeg",
      title: "Single Vision (2 Pairs)",
      price: "R1500",
      items: [
        "Full eye test",
        "2x Stylish frames",
        "2x Standard clear lenses",
        "Professional service",
      ],
      link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Normal+Single+Vision+Package+%28R1500%29&type=phone_number&app_absent=0",
    },
    {
      image: "/TTP_images/image9.jpeg",
      title: "Bifocal (2 Pairs)",
      price: "R1800",
      items: [
        "Full eye test",
        "2x Stylish frames",
        "2x Bifocal lenses",
        "Professional fitting",
      ],
      link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Normal+Bifocal+Package+%28R1800%29&type=phone_number&app_absent=0",
    },
    {
      image: "/TTP_images/maltifocla2pairs.jpeg",
      title: "Multifocal (2 Pairs)",
      price: "R2500",
      items: [
        "Full eye test",
        "2x Stylish frames",
        "2x Progressive lenses",
        "Premium service",
      ],
      link: "https://api.whatsapp.com/send/?phone=27671004687&text=Hi%21+I%27m+interested+in+the+Normal+Multifocal+Package+%28R2500%29&type=phone_number&app_absent=0",
    },
  ],
};

function HomePage() {
  const sliderRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = "grabbing";
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.style.cursor = "grab";
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.style.cursor = "grab";
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    });

    document.querySelectorAll(".card, .package, .testimonial").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (slider) {
        slider.removeEventListener("mousedown", () => {});
        slider.removeEventListener("mouseleave", () => {});
        slider.removeEventListener("mouseup", () => {});
        slider.removeEventListener("mousemove", () => {});
      }
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission! We will contact you soon.");
  };

  return (
    <div>
      {/* Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 16,
              boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
              position: "relative",
              maxWidth: 350,
              textAlign: "center",
              animation: "fadeIn 0.5s",
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "transparent",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
                color: "#888",
              }}
              aria-label="Close sale popup"
            >
              ×
            </button>
            {/* Sale Banner */}
            <img
              src="/TTP_images/sale.jpeg"
              alt="Special Sale"
              style={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 10,
                marginBottom: 16,
              }}
            />
            <p>
              Book your appointment now!
            </p>
            <a
              href="#appointment"
              className="btn"
              style={{
                marginTop: 14,
                background: "#e74c3c",
                color: "#fff",
                borderRadius: 6,
                padding: "8px 16px",
                textDecoration: "none",
                display: "inline-block",
              }}
              onClick={() => setShowPopup(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav>
        <h1>TTG Optometrist</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
          <li>
            <a href="#appointment">Book Appointment</a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h2>
              Experience Vision Like{" "}
              <span className="highlight">Never Before</span>
            </h2>
            <p>
              Eye care solutions tailored for you. From comprehensive
              examinations to cutting-edge virtual try-on technology, we're
              revolutionizing eye care in Midrand.
            </p>
            <a href="#appointment" className="btn">
              Book Now
            </a>
          </div>
          <div className="hero-image">
            <img src="/TTP_images/logo.jpeg" alt="Logo" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-overlay">
          <h3>
            Your Vision, <span>Our Mission</span>
          </h3>
          <p>
            At <strong>TTG Optometrist</strong>, we've been serving the
            Johannesburg community for over 5 years with dedication, expertise,
            and cutting-edge technology. Our practice combines traditional eye
            care values with innovative solutions.
          </p>
          <div className="about-us">
            <h3>Our Commitment</h3>
            <ul>
              <li>Personalized care tailored to each patient's unique needs</li>
              <li>
                State-of-the-art diagnostic equipment and treatment methods
              </li>
              <li>
                Continuous education and training in the latest eye care
                advances
              </li>
              <li>
                Building long-term relationships with our patients and community
              </li>
            </ul>
          </div>
          <div className="doctor">
            <h3>Optometrist: Thandeka Mbuyazi</h3>
            <p>Lead Optometrist, HPCSA Registered</p>
            <p className="quote">
              "Passionate about providing exceptional eye care with a personal
              touch."
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <h3>Our Advanced Eye Care Services</h3>
        <p>
          From routine check-ups to specialized treatments, we offer
          comprehensive eye care services using the latest technology and
          techniques.
        </p>
        <div className="services-slider" ref={sliderRef}>
          {serviceCards.map((card, i) => (
            <div className="card" key={i}>
              <span className="icon">{iconMap[card.icon]}</span>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <ul>
                {card.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products">
        <h3>Our Pricing Packages</h3>
        <p>
          We offer a range of pricing packages to suit your needs and budget.
          All packages include a comprehensive eye examination and access to our
          advanced virtual try-on technology.
        </p>
        {/* Kids Package */}
        <div className="package kids">
          <img src={packages.kids.image} alt="Kids Promo" />
          <h3 className="highlight">{packages.kids.title}</h3>
          <span className="price">{packages.kids.price}</span>
          <span className="age">{packages.kids.age}</span>
          <p>{packages.kids.desc}</p>
          <ul>
            {packages.kids.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <a href={packages.kids.link} className="btn">
            Book WhatsApp
          </a>
        </div>
        {/* Pensioner Packages */}
        <h3>Pensioner Packages</h3>
        <div className="package-grid">
          {packages.pensioner.map((pkg, i) => (
            <div className="package" key={i}>
              <img src={pkg.image} alt={pkg.title} />
              <h3 className="highlight">{pkg.title}</h3>
              <span className="price">{pkg.price}</span>
              <ul>
                {pkg.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <a href={pkg.link} className="btn">
                Book WhatsApp
              </a>
            </div>
          ))}
        </div>
        {/* Normal Packages */}
        <h3>Normal Packages</h3>
        <p>Get 2 pairs of glasses with every package</p>
        <div className="package-grid">
          {packages.normal.map((pkg, i) => (
            <div className="package" key={i}>
              <img src={pkg.image} alt={pkg.title} />
              <h3 className="highlight">{pkg.title}</h3>
              <span className="price">{pkg.price}</span>
              <ul>
                {pkg.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <a href={pkg.link} className="btn">
                Book WhatsApp
              </a>
            </div>
          ))}
        </div>
        <div className="contact-note">
          Need a custom package or have questions about our pricing?
        </div>
        <button className="btn">Contact Us via WhatsApp</button>
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <h3>Our Portfolio</h3>
        <p>
          Take a look at our modern facility, advanced equipment, and the
          smiling faces of our satisfied customers
        </p>
        <div className="portfolio-slider">
          <div className="slide-track">
            {images.map((img, i) => (
              <img src={img} alt="" key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <h3>What Our Patients Say</h3>
        <p>
          Don't just take our word for it. Here's what our valued patients have
          to say about their experience with TTG Optometry.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <p>{t.text}</p>
              <span>- {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Ready to experience exceptional eye care? Contact us today to
            schedule your appointment or learn more about our services.
          </p>
          <div className="address">
            <p>
              <strong>Visit Our Clinic</strong>
            </p>
            <p>9 Acacia Street Ebony Park, Johannesburg, 1632 South Africa</p>
          </div>
          <div className="phone">
            <p>
              <strong>Call Us</strong>
            </p>
            <p>067 100 4687</p>
            <p>Emergency: 067 100 4687</p>
          </div>
          <div className="opening-hours">
            <p>
              <strong>Opening Hours</strong>
            </p>
            <p>Mon-Fri: 09h00 - 17h00</p>
            <p>Sat: 09h00 - 15h00</p>
            <p>Sun: Closed</p>
          </div>
        </div>
        <div className="send-message">
          <h3>Send us a Message</h3>
          <p>
            Have a question or want to schedule an appointment? Fill out the
            form below and we'll get back to you within 24 hours.
          </p>
          <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <select name="services">
              <option value="">Select a Service</option>
              <option value="eye-exam">Eye Examination</option>
              <option value="contact-lenses">Contact Lens Fitting</option>
              <option value="pediatric-care">Glasses Prescription</option>
              <option value="designer-frames">Pediatric Eye Care</option>
              <option value="dry-eye-treatment">Others</option>
            </select>
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Appointment */}
      <section id="appointment">
        <h3>Book an Appointment</h3>
        <p>Schedule your consultation with our specialists today.</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="date" required />
          <button type="submit">Confirm Appointment</button>
        </form>
      </section>

      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=9+Acacia+Street,+Ebony+Park,+Johannesburg,+1632,+South+Africa&output=embed"
          title="Google Maps"
        ></iframe>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-logo">
          <img src="/TTP_images/logo.jpeg" alt="Logo" />
        </div>
        <div className="footer-disc">
          <p>
            Experience vision like never before. Advanced eye care solutions
            tailored for you in the heart of Midrand.
          </p>
        </div>
        <div className="footer-social">
          <a href="https://web.facebook.com/TTGOPTOMETRIST" title="Facebook">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ttgoptometristsa"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=27671004687"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="fopter-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact-section">Contact</a>
        </div>
        <div className="footer-services">
          <a href="#services">Full Eye Test</a>
          <a href="#services">Contact Lens Exam</a>
          <a href="#services">Driver's Test</a>
          <a href="#services">Pediatric Care</a>
          <a href="#services">Corporate Services</a>
        </div>
        <div className="footer-contact">
          <h4 style={{ color: "#3498db", marginBottom: 15 }}>Contact Info</h4>
          <p>
            <span style={{ color: "#3498db", marginRight: 8 }}>📍</span>9 Acacia
            Street Ebony Park, Johannesburg, 1632 South Africa
          </p>
          <p>
            <span style={{ color: "#3498db", marginRight: 8 }}>📞</span>
            067 100 4687
          </p>
          <p>
            <span style={{ color: "#3498db", marginRight: 8 }}>✉️</span>
            thandekaiservices@gmail.com
          </p>
        </div>
        <div className="footer-copy">
          <p>
            &copy; <span id="year">2025</span> TTG Optometrist. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
