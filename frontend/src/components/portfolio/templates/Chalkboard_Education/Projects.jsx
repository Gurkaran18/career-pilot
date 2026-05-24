import React, { useEffect, useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Interactive Math Tutor",
    description:
      "A web app that walks students through algebra step-by-step with real-time feedback, adaptive difficulty, and personalised hints for each learner.",
    subject: "Mathematics",
    chapter: "Chapter 01",
    grade: "A+",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Science Quiz Generator",
    description:
      "AI-powered quiz platform that creates personalised science questions based on each student's learning history and performance trends.",
    subject: "Science",
    chapter: "Chapter 02",
    grade: "A",
    tags: ["Python", "FastAPI", "OpenAI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Digital Flashcard System",
    description:
      "Spaced-repetition flashcard tool for language learners with audio pronunciation support and detailed progress analytics.",
    subject: "Languages",
    chapter: "Chapter 03",
    grade: "A+",
    tags: ["Vue.js", "Firebase", "Web Audio"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "History Timeline Explorer",
    description:
      "Interactive visual timeline helping students navigate world history events with annotated primary-source documents and zoom controls.",
    subject: "History",
    chapter: "Chapter 04",
    grade: "A",
    tags: ["D3.js", "TypeScript", "Vite"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

const subjectStyles = {
  Mathematics: { background: "#FFD166", color: "#3D2C00" },
  Science: { background: "#06D6A0", color: "#003D2E" },
  Languages: { background: "#EF476F", color: "#3D0010" },
  History: { background: "#4CC9F0", color: "#002D3D" },
};

function ChalkMarks() {
  const marks = [
    { symbol: "✦", top: "7%", left: "8%", size: "0.95rem", rotate: "-12deg" },
    { symbol: "◦", top: "15%", right: "14%", size: "1.1rem", rotate: "8deg" },
    { symbol: "·", top: "24%", left: "18%", size: "1.4rem", rotate: "0deg" },
    { symbol: "—", top: "32%", right: "9%", size: "1.25rem", rotate: "-6deg" },
    { symbol: "✦", top: "40%", left: "5%", size: "0.78rem", rotate: "7deg" },
    { symbol: "·", top: "46%", right: "18%", size: "1.15rem", rotate: "-4deg" },
    { symbol: "◦", top: "58%", left: "12%", size: "0.9rem", rotate: "0deg" },
    { symbol: "—", top: "63%", right: "7%", size: "1rem", rotate: "3deg" },
    { symbol: "✦", bottom: "26%", left: "10%", size: "0.9rem", rotate: "10deg" },
    { symbol: "◦", bottom: "14%", right: "18%", size: "1rem", rotate: "-8deg" },
    { symbol: "·", bottom: "8%", left: "24%", size: "1.35rem", rotate: "5deg" },
    { symbol: "—", bottom: "20%", right: "30%", size: "1.1rem", rotate: "4deg" },
    { symbol: "✦", bottom: "32%", right: "41%", size: "0.82rem", rotate: "-10deg" },
    { symbol: "·", bottom: "11%", right: "9%", size: "1.12rem", rotate: "6deg" },
  ];

  return (
    <>
      {marks.map((mark, index) => (
        <span
          key={`${mark.symbol}-${index}`}
          aria-hidden="true"
          style={{
            position: "absolute",
            color: "rgba(237,228,200,0.18)",
            fontFamily: "'Kalam', cursive",
            fontSize: mark.size,
            lineHeight: 1,
            transform: `rotate(${mark.rotate})`,
            pointerEvents: "none",
            ...mark,
          }}
        >
          {mark.symbol}
        </span>
      ))}
    </>
  );
}

function SectionHeader() {
  return (
    <div className="mb-10 md:mb-14 relative z-10">
      <div
        style={{
          color: "rgba(237,228,200,0.60)",
          fontFamily: "'Kalam', cursive",
          fontSize: "1rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "0.8rem",
        }}
      >
        ✦ Portfolio ✦
      </div>

      <h2
        id="projects-heading"
        style={{
          color: "#EDE4C8",
          fontFamily: "'Caveat', cursive",
          fontWeight: 700,
          fontSize: "clamp(2.65rem, 5.6vw, 3.6rem)",
          lineHeight: 1,
          margin: 0,
          textShadow: "0 0 1px rgba(237,228,200,0.4)",
        }}
      >
        My Projects
      </h2>

      <div style={{ marginTop: "0.45rem", marginBottom: "1rem" }}>
        <svg
          width="230"
          height="22"
          viewBox="0 0 230 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 12C19 5.9 29 17.6 43 12.2C58 6.1 68 17.5 83 11.9C97 6.3 108 17.8 123 12.1C138 6 149 17.4 164 11.8C180 6.4 191 17.9 226 10.8"
            stroke="#EDE4C8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="2 4.6"
            opacity="0.88"
          />
        </svg>
      </div>

      <p
        style={{
          color: "rgba(237,228,200,0.60)",
          fontFamily: "'Kalam', cursive",
          fontSize: "1.04rem",
          margin: 0,
        }}
      >
        4 projects · All grades A or above
      </p>
    </div>
  );
}

function GradeBadge({ grade }) {
  return (
    <span
      aria-label={`Grade: ${grade}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "3rem",
        padding: "0.28rem 0.78rem",
        border: "1px dashed rgba(230,220,190,0.44)",
        borderRadius: "999px",
        color: "#EDE4C8",
        fontFamily: "'Kalam', cursive",
        fontSize: "1rem",
        letterSpacing: "0.04em",
        background: "rgba(255,255,255,0.035)",
      }}
    >
      {grade}
    </span>
  );
}

function SubjectPill({ subject }) {
  const palette = subjectStyles[subject];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.28rem 0.78rem",
        borderRadius: "999px",
        background: palette.background,
        color: palette.color,
        fontFamily: "'Kalam', cursive",
        fontSize: "0.86rem",
        fontWeight: 700,
        letterSpacing: "0.03em",
      }}
    >
      {subject}
    </span>
  );
}

function TechTag({ tag }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.28rem 0.8rem",
        border: "1px dashed rgba(230,220,190,0.26)",
        borderRadius: "999px",
        color: "rgba(237,228,200,0.82)",
        fontFamily: "'Kalam', cursive",
        fontSize: "0.89rem",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {tag}
    </span>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const borderColor = isHovered
    ? project.featured
      ? "rgba(230,220,190,0.88)"
      : "rgba(230,220,190,0.58)"
    : project.featured
      ? "rgba(230,220,190,0.68)"
      : "rgba(230,220,190,0.34)";

  const backgroundColor = isHovered
    ? "rgba(255,255,255,0.105)"
    : project.featured
      ? "rgba(255,255,255,0.082)"
      : "rgba(255,255,255,0.05)";

  const cardClassName = [
    "relative overflow-hidden",
    project.id === 1 || project.id === 4 ? "sm:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linkStyle = (key) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    color: hoveredLink === key ? "#EDE4C8" : "rgba(237,228,200,0.55)",
    fontFamily: "'Kalam', cursive",
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "color 180ms ease",
  });

  return (
    <article
      className={cardClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredLink(null);
      }}
      style={{
        minHeight: project.id === 1 || project.id === 4 ? "auto" : "100%",
        padding: project.id === 1 ? "2rem 1.9rem 1.85rem" : "1.85rem 1.65rem 1.7rem",
        borderRadius: "4px",
        border: `${project.featured ? 1.5 : 1.15}px dashed ${borderColor}`,
        background: backgroundColor,
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        transition:
          "transform 220ms ease, border-color 220ms ease, background-color 220ms ease",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.02), inset 0 14px 24px rgba(255,255,255,0.012)",
        backgroundImage:
          "radial-gradient(circle at 14% 18%, rgba(255,255,255,0.05), transparent 15%), radial-gradient(circle at 87% 82%, rgba(255,255,255,0.04), transparent 16%), radial-gradient(circle at 84% 14%, rgba(255,255,255,0.025), transparent 10%), repeating-linear-gradient(-8deg, rgba(255,255,255,0.012), rgba(255,255,255,0.012) 1px, transparent 1px, transparent 7px)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "14px",
          right: "18px",
          width: project.featured ? "68px" : "52px",
          height: project.featured ? "28px" : "22px",
          borderRadius: "999px",
          background: "radial-gradient(circle, rgba(237,228,200,0.08) 0%, rgba(237,228,200,0.02) 52%, transparent 72%)",
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          width: project.featured ? "78px" : "58px",
          height: project.featured ? "30px" : "24px",
          borderRadius: "999px",
          background: "radial-gradient(circle, rgba(237,228,200,0.07) 0%, rgba(237,228,200,0.015) 55%, transparent 75%)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          width: project.featured ? "28px" : "24px",
          height: project.featured ? "28px" : "24px",
          borderTop: `1.4px solid ${borderColor}`,
          borderLeft: `1.4px solid ${borderColor}`,
          opacity: 0.95,
        }}
      />

      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "12px",
          bottom: "12px",
          width: project.featured ? "28px" : "24px",
          height: project.featured ? "28px" : "24px",
          borderRight: `1.4px solid ${borderColor}`,
          borderBottom: `1.4px solid ${borderColor}`,
          opacity: 0.95,
        }}
      />

      {project.featured ? (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.42rem",
            marginBottom: "1.15rem",
            padding: "0.34rem 0.82rem",
            borderRadius: "999px",
            background: "#22783C",
            color: "#B6FFCC",
            fontFamily: "'Kalam', cursive",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
            border: "1px dashed rgba(182,255,204,0.25)",
          }}
        >
          <Star size={14} fill="#B6FFCC" strokeWidth={1.8} />
          Featured Lesson
        </div>
      ) : null}

      <div
        className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ maxWidth: project.id === 1 || project.id === 4 ? "52rem" : "100%" }}>
          <div
            style={{
              color: "rgba(237,228,200,0.6)",
              fontFamily: "'Kalam', cursive",
              fontSize: "0.86rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.72rem",
            }}
          >
            {project.chapter}
          </div>

          <h3
            style={{
              color: "#EDE4C8",
              fontFamily: "'Caveat', cursive",
              fontSize: project.id === 1 ? "2.35rem" : "2rem",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: 0,
              textShadow: "0 0 1px rgba(237,228,200,0.26)",
            }}
          >
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 sm:justify-end" style={{ flexShrink: 0 }}>
          <GradeBadge grade={project.grade} />
          <SubjectPill subject={project.subject} />
        </div>
      </div>

      <p
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "1.25rem",
          marginBottom: "1.45rem",
          color: "rgba(237,228,200,0.60)",
          fontFamily: "'Kalam', cursive",
          fontSize: "1.04rem",
          lineHeight: 1.82,
          maxWidth: project.id === 1 || project.id === 4 ? "56rem" : "100%",
        }}
      >
        {project.description}
      </p>

      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "1px",
          marginBottom: "1.2rem",
          background:
            "linear-gradient(90deg, rgba(230,220,190,0.06) 0%, rgba(230,220,190,0.22) 12%, rgba(230,220,190,0.14) 46%, rgba(230,220,190,0.24) 78%, rgba(230,220,190,0.05) 100%)",
          opacity: 0.92,
          transform: "rotate(-0.35deg)",
        }}
      />

      <div
        className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={project.githubUrl}
            aria-label={`View ${project.title} on GitHub`}
            style={linkStyle("github")}
            onMouseEnter={() => setHoveredLink("github")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Github size={16} strokeWidth={1.9} />
            GitHub
          </a>

          <a
            href={project.liveUrl}
            aria-label={`View live demo of ${project.title}`}
            style={linkStyle("live")}
            onMouseEnter={() => setHoveredLink("live")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <ExternalLink size={16} strokeWidth={1.9} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  useEffect(() => {
    const existing = document.getElementById("chalk-fonts");

    if (!existing) {
      const link = document.createElement("link");
      link.id = "chalk-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Kalam:wght@400;700&display=swap";
      document.head.appendChild(link);
    }

    return () => {
      const injected = document.getElementById("chalk-fonts");
      if (injected) {
        injected.remove();
      }
    };
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full overflow-hidden px-3 py-12 sm:px-5 md:px-6 md:py-16 lg:px-6 lg:py-20"
      style={{
        minHeight: "100vh",
        background: "#0B1F13",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 18%, rgba(255,255,255,0.03), transparent 24%), radial-gradient(circle at 80% 22%, rgba(255,255,255,0.02), transparent 20%), radial-gradient(circle at 35% 70%, rgba(255,255,255,0.018), transparent 22%), radial-gradient(circle at 62% 54%, rgba(255,255,255,0.018), transparent 21%), repeating-linear-gradient(0deg, rgba(255,255,255,0.012), rgba(255,255,255,0.012) 1px, transparent 1px, transparent 4px)",
          opacity: 0.76,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5rem",
          right: "-4rem",
          width: "16rem",
          height: "16rem",
          borderRadius: "999px",
          background: "rgba(34,120,60,0.18)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "12%",
          left: "18%",
          width: "12rem",
          height: "3.2rem",
          borderRadius: "999px",
          background: "radial-gradient(circle, rgba(237,228,200,0.05) 0%, rgba(237,228,200,0.012) 45%, transparent 72%)",
          opacity: 0.25,
          transform: "rotate(-8deg)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "18%",
          right: "14%",
          width: "10rem",
          height: "2.8rem",
          borderRadius: "999px",
          background: "radial-gradient(circle, rgba(237,228,200,0.045) 0%, rgba(237,228,200,0.01) 48%, transparent 74%)",
          opacity: 0.22,
          transform: "rotate(11deg)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-6rem",
          left: "-5rem",
          width: "18rem",
          height: "18rem",
          borderRadius: "999px",
          background: "rgba(34,120,60,0.18)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />

      <ChalkMarks />

      <div className="relative mx-auto max-w-[1180px]">
        <SectionHeader />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
