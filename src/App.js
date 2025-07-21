"use client";

import Beams from "./Beams/Beams";
import TrueFocus from "./TrueFocus/TrueFocus";
import DecryptedText from "./DecryptedText/DecryptedText";
import ScrollFloat from "./ScrollFloat/ScrollFloat";
import LenisProvider from "./Wrapper/LenisProvider";
import ProfileCard from "./ProfileCard/ProfileCard";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";
import ScrollReveal from "./ScrollReveal/ScrollReveal";
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
                handle="shoosahn_"
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
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
                  text="I'm a passionate frontend developer who loves crafting beautiful and performant web experiences. Welcome to my portofolio!"
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
              velocity={100}
              className="custom-scroll-text"
            />
          </section>
        </section>

        {/* ABOUT ME */}
        <section
          id="about-me"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4rem 2rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "1000px",
              width: "100%",
            }}
          >
            <ScrollFloat>About Me</ScrollFloat>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={10}
            >
              I’m Shoosahn, a frontend developer with a strong focus on clean
              code, smooth animations, and delightful user experiences. I enjoy
              turning complex problems into simple and intuitive interfaces.
            </ScrollReveal>
          </div>
        </section>

        {/* PROJECTS & CONTACT */}
        {[
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
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
          >
            <ScrollFloat>{label}</ScrollFloat>
          </section>
        ))}
      </main>
    </LenisProvider>
  );
}
