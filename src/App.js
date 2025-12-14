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

        {/* PROJECTS & CONTACT */}
        {[{ id: "projects", label: "Projects" }].map(({ id }) => (
          <section
            key={id}
            id={id}
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "6rem 2rem 2rem 2rem",
              position: "relative",
              zIndex: 2,
            }}
          ></section>
        ))}
      </main>
    </LenisProvider>
  );
}
