import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Globe2,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Pro Connect",
    type: "Professional Networking Platform",
    description:
      "A LinkedIn-inspired platform designed to bring professional profiles, connections, and community into one place.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Mongoose",
      "Vercel",
    ],
    live: "https://pro-connect-linkedin-clone-apnacoll.vercel.app",
    code: "https://github.com/praveenkumarprakash8-max/ProConnectLinkedinCloneApnacollege",
    featured: true,
  },
  {
    number: "02",
    title: "Apna Video Call",
    type: "Real-Time Video Communication App",
    description:
      "A real-time 1-on-1 video calling web application built with React, Node.js, and WebRTC. Includes peer-to-peer audio/video communication, room creation, and Socket.io signaling.",
    stack: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express.js",
      "WebRTC",
      "Socket.io",
      "Render",
    ],
    live: "https://apnacollegezoomfrontend-cque.onrender.com",
    code: "https://github.com/praveenkumarprakash8-max/Apna-Video-Call",
  },
  {
    number: "03",
    title: "Wanderlust",
    type: "Full-Stack Property Rental Platform",
    description:
      "A full-stack Airbnb-inspired property rental platform using MVC architecture. Features property listings, CRUD operations, user authentication, a review system, and MongoDB database management with a responsive Bootstrap UI.",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "MVC Architecture",
      "Bootstrap",
      "Render",
    ],
    live: "https://my-firsr-project.onrender.com",
    code: "https://github.com/praveenkumarprakash8-max/wanderlust",
  },
];

const skills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
];

function Eyebrow({ children, live = false }) {
  return (
    <div className="eyebrow">
      {live && <span className="status-dot" />}
      {children}
    </div>
  );
}

function ProConnectPreview() {
  return (
    <div className="mock-window">
      <div className="mock-bar">
        <span />
        <span />
        <span />
        <b>proconnect.app</b>
      </div>

      <div className="mock-content">
        <div className="mock-sidebar">
          <div className="mock-avatar" />
          <i />
          <i />
          <i />
        </div>

        <div className="mock-main">
          <div className="mock-banner" />

          <div className="mock-profile">
            <div className="mock-avatar large" />
            <div>
              <b>Build your network.</b>
              <i />
            </div>
          </div>

          <div className="mock-post" />
          <div className="mock-post short" />
        </div>
      </div>
    </div>
  );
}

function VideoCallPreview() {
  return (
    <div className="placeholder-art video-call-art">
      <div className="video-call-window">
        <div className="video-call-header">
          <span className="call-status-dot" />
          <b>Apna Video Call</b>
          <small>LIVE MEETING</small>
        </div>

        <div className="video-participants">
          <div className="participant participant-main">
            <div className="participant-avatar">
              <span>SK</span>
            </div>
            <span className="participant-name">You</span>
          </div>

          <div className="participant participant-side">
            <div className="participant-avatar avatar-two">
              <span>JD</span>
            </div>
            <span className="participant-name">Participant</span>
          </div>
        </div>

        <div className="video-call-controls">
          <span className="call-control">🎙</span>
          <span className="call-control">📹</span>
          <span className="call-control call-end">☎</span>
        </div>
      </div>

      <small className="preview-caption">REAL-TIME VIDEO COMMUNICATION</small>
    </div>
  );
}

function WanderlustPreview() {
  return (
    <div className="placeholder-art wanderlust-art">
      <div className="travel-window">
        <div className="travel-header">
          <b>Wanderlust.</b>
          <span>Explore stays ↗</span>
        </div>

        <div className="travel-hero">
          <div>
            <small>FIND YOUR NEXT GETAWAY</small>
            <h3>
              Stay somewhere
              <br />
              unforgettable.
            </h3>
            <span className="travel-search">⌕ Where do you want to go?</span>
          </div>
        </div>

        <div className="travel-section-title">
          <b>Popular stays</b>
          <small>Explore places</small>
        </div>

        <div className="travel-listings">
          <div className="travel-card">
            <div className="travel-photo travel-photo-one" />
            <b>Mountain Escape</b>
            <small>Cozy stay in nature</small>
          </div>

          <div className="travel-card">
            <div className="travel-photo travel-photo-two" />
            <b>Beach Retreat</b>
            <small>Relax by the coast</small>
          </div>
        </div>
      </div>

      <small className="preview-caption">DISCOVER YOUR NEXT DESTINATION</small>
    </div>
  );
}

function ProjectPreview({ project }) {
  return (
    <div
      className={`project-visual ${
        project.featured
          ? "proconnect"
          : project.number === "02"
            ? "project-two"
            : "project-three"
      }`}
    >
      <div className="visual-top">
        <span>{project.number} / 03</span>
        <span>CASE STUDY</span>
      </div>

      {project.featured ? (
        <ProConnectPreview />
      ) : project.number === "02" ? (
        <VideoCallPreview />
      ) : (
        <WanderlustPreview />
      )}

      <div className="visual-bottom">
        <span>PERSONAL PROJECT</span>
        <span>2026</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home" aria-label="Praveen home">
          <span className="brand-mark">P.</span>
          <span>PRAVEEN KUMAR</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>

        <a className="mobile-cta" href="#contact" aria-label="Contact">
          <Mail size={18} />
        </a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <Eyebrow live>OPEN TO INTERNSHIPS & OPPORTUNITIES</Eyebrow>

          <h1>
            Building digital
            <br />
            <span className="serif">experiences</span>
            <br />
            that feel <span className="highlight">human.</span>
          </h1>

          <p className="hero-intro">
            Hey, I&apos;m Praveen — a developer focused on creating clean
            interfaces and useful web experiences with React and the MERN stack.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowDownRight size={17} />
            </a>

            <a className="text-link" href="#contact">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Profile photo">
          <div className="art-grid" />

          <div className="art-core">
            <img
              src="/praveen.jpeg"
              alt="Praveen Kumar - MERN Stack Developer"
              width={230}
              height={230}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>

        <a className="scroll-note" href="#work">
          <span className="scroll-line" /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="section shell work-section" id="work">
        <div className="section-head">
          <div>
            <Eyebrow>01 / SELECTED WORK</Eyebrow>
            <h2>
              Some things I&apos;ve
              <br />
              <span className="serif">put into the world.</span>
            </h2>
          </div>

          <p>
            A few projects that reflect how I think, build, and turn ideas into
            working products.
          </p>
        </div>

        <div className="project-list">
          {projects.map((p) => (
            <article className="project-row" key={p.number}>
              <ProjectPreview project={p} />

              <div className="project-info">
                <div className="project-kicker">{p.type}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="tag-list">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live project <ArrowUpRight size={16} />
                  </a>

                  <a href={p.code} target="_blank" rel="noreferrer">
                    Source code <Github size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-left">
            <Eyebrow>02 / A LITTLE ABOUT ME</Eyebrow>
            <h2>
              Good code is
              <br />
              important.{" "}
              <span className="serif">
                Good
                <br />
                experiences are
                <br />
                the point.
              </span>
            </h2>
          </div>

          <div className="about-right">
            <div className="about-icon">
              <Terminal size={24} />
            </div>

            <p className="about-lead">
              I enjoy turning ideas into practical, polished web experiences.
            </p>

            <p className="about-body">
              I&apos;m currently in college and growing my skills in frontend
              and full-stack development. I like understanding how things work,
              building projects from the ground up, and improving the small
              details that make a product easier to use.
            </p>

            <p className="about-body">
              I&apos;m looking for an opportunity where I can contribute, learn
              from a team, and keep getting better as a developer.
            </p>

            <a className="underlined-link" href="#contact">
              Let&apos;s build something meaningful <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section shell skills-section" id="skills">
        <div className="section-head">
          <div>
            <Eyebrow>03 / MY TOOLKIT</Eyebrow>
            <h2>
              Tools I use to
              <br />
              <span className="serif">make it happen.</span>
            </h2>
          </div>

          <p>My current stack, with plenty more to learn and explore.</p>
        </div>

        <div className="skills-layout">
          <div className="skills-intro">
            <Globe2 size={25} />
            <h3>
              Curious mind.
              <br />
              Practical builder.
            </h3>
            <p>
              I focus on the fundamentals, write maintainable code, and learn by
              building real projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="skill-item" key={s}>
                <span className="skill-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <Eyebrow live>04 / HAVE A PROJECT IN MIND?</Eyebrow>

          <h2>
            Let&apos;s make
            <br />
            <span className="serif">something matter.</span>
          </h2>

          <p>
            Open to internships, entry-level roles, and opportunities to learn
            by building.
          </p>

          <a
            className="button button-light"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=praveenkumarprakash8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say hello <ArrowUpRight size={17} />
          </a>

          <div className="contact-orbit" />
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#home">
          <span className="brand-mark">P.</span>
          <span>PRAVEEN KUMAR</span>
        </a>

        <span className="footer-note">
          DESIGNED WITH INTENTION · BUILT WITH CODE
        </span>

        <div className="socials">
          <a
            href="https://github.com/praveenkumarprakash8-max"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a href="mailto:praveenkumarprakash8@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <span className="copyright">© 2026 PRAVEEN KUMAR</span>
      </footer>
    </main>
  );
}
