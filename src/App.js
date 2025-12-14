"use client";

import Beams from "./components/Beams/Beams";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import LenisProvider from "./components/Wrapper/LenisProvider";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <LenisProvider>
      {/* Background Beams */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
      <Navbar />
      {/* Navbar */}

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          color: "white",
        }}
      >
        {/* HOME */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Top Grid - 2 Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              maxWidth: "1200px",
              width: "100%",
            }}
          >
            {/* Left Column: ProfileCard */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ProfileCard
                name=""
                title=""
                handle="Shoosahn_"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/Shoosahn.png"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>

            {/* Right Column: TrueFocus + DecryptedText */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5rem",
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TrueFocus
                  sentence="Hello, I'm Shoosahn."
                  manualMode={true}
                  blurAmount={8}
                  borderColor="white"
                  animationDuration={0.3}
                />
              </div>

              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "300",
                  lineHeight: "1.6",
                  color: "#ccc",
                  fontFamily: "Courier New, monospace",
                }}
              >
                <DecryptedText
                  text="I'm a passionate frontend developer who loves crafting beautiful and performant web experiences. Welcome to my portfolio!"
                  speed={40}
                  maxIterations={10}
                  sequential={true}
                  useOriginalCharsOnly={true}
                  className="revealed"
                  revealDirection="start"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>
            </div>
          </div>

          <section
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              marginTop: "4rem",
              padding: "0 1rem",
              zIndex: 2,
            }}
          >
            <ScrollVelocity
              texts={["PORTOFOLIO WEB"]}
              velocity={200}
              className="custom-scroll-text"
            />
          </section>
        </section>

        {/* ABOUT ME */}
        <section
          id="about-me"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem 2rem",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <div style={{ marginTop: "3rem", marginBottom: "rem" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "400",
                  color: "white",
                  margin: 0,
                }}
              >
                About Me
              </h2>

          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",    // vertical center
              justifyContent: "center", // horizontal center
              gap: "2rem",
              maxWidth: "900px",
              margin: "2rem auto",
              padding: "0 1.2rem",
            }}
          >
            {/* Logo di kiri */}
            <img
              src="/itenas-logo-putih.png"
              alt="logo"
              style={{
                width: "300px",      // ukuran logo
                maxWidth: "30%",     // jangan melebihi 30% container
                height: "auto",
                objectFit: "contain",
                borderRadius: "12px",
                flexShrink: 0,
              }}
            />

            {/* Teks di kanan */}
            <ScrollReveal scrollDistance={400} style={{ flex: 1 }}>
              I’m an Informatics student at Institut Teknologi Nasional Bandung, and I’m passionate about web development and emerging technologies. I enjoy creating interactive and visually appealing applications, always focusing on both functionality and user experience.
            </ScrollReveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          style={{
            minHeight: "100vh",
            padding: "6rem 2rem 2rem 2rem",
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "500",
              color: "white",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            My Projects
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {/* Contoh Project Card */}
            {[
              {
                title: "Portfolio Website",
                description:
                  "A personal portfolio website showcasing my projects, skills, and experience using React and GSAP animations.",
                imageUrl: "/project1.png",
                link: "#",
              },
              {
                title: "E-commerce App",
                description:
                  "A modern e-commerce web app with product listing, cart functionality, and smooth UI interactions.",
                imageUrl: "/project2.png",
                link: "#",
              },
              {
                title: "Blog Platform",
                description:
                  "A responsive blogging platform where users can create and read posts, built with Next.js and TailwindCSS.",
                imageUrl: "/project3.png",
                link: "#",
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#1a1a1a",
                  borderRadius: "12px",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "white",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#ccc" }}>
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>
    </LenisProvider>
  );
}
