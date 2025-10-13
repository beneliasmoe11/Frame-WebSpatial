import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initScene } from "@webspatial/react-sdk";
import "./App.css";
import SecondPage from "./SecondPage";

// Declare global variable injected by vite
declare const __XR_ENV_BASE__: string;

function MainPage() {
  const stories = [
    {
      id: 1,
      title: "Argentina's Dirty War",
      description:
        "Four women's stories of life under Argentina's 1976-1983 dictatorship.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FHomepage_Argentina.jpg&w=1080&q=75",
      url: "https://beta.frame.media/experimental/argentina-milei-dirty-war-plaza-de-mayo-detention-centers",
    },
    {
      id: 2,
      title: "Into the Gap",
      description:
        "How the most dangerous jungle in the world became a dastardly rite of passage for migrant children.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2Fdarien_sharecard.png&w=1080&q=75",
      url: "https://beta.frame.media/experimental/darien-gap-migrants-unhcr-panama",
    },
    {
      id: 3,
      title: "A Stolen Generation",
      description:
        "In the 1990s and early 2000s, the Philippines was the kidnapping capital of the world. Today, victims are finally telling their stories.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FPhilippines_sharecard.jpg&w=1080&q=75",
      url: "https://beta.frame.media/experimental/philippines-kidnap-victims-stolen-generation-marcos",
    },
    {
      id: 4,
      title: "The Logging Quagmire",
      description:
        "How one of California's biggest industries amplified an era of destructive wildfires.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FGettyImages-1234144015.jpg&w=1080&q=75",
      url: "https://beta.frame.media/experimental/park-fire-paradise-dixie-calfire-logging-quagmire",
    },
    {
      id: 5,
      title: "Living in the Shadow of Gas Flaring",
      description:
        "In Nigeria, gas flaring has upended lives for decades. New reforms could change that.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FGas_flaring.png&w=1080&q=75",
      url: "https://beta.frame.media/experimental/gas-flaring-nigeria-climate-change",
    },
  ];

  const openAllStoriesScenes = () => {
    // Open the logo window first
    initScene("logo-scene", (prevConfig) => {
      return {
        ...prevConfig,
        defaultSize: {
          width: 400,
          height: 400,
        },
      };
    });
    window.open(`${__XR_ENV_BASE__}/logo`, "logo-scene");

    // Open each story in a separate Vision Pro window
    stories.forEach((story) => {
      const sceneName = `story-${story.id}`;

      // Initialize each scene with custom size and position
      initScene(sceneName, (prevConfig) => {
        return {
          ...prevConfig,
          defaultSize: {
            width: 800,
            height: 600,
          },
        };
      });

      // Open each story in its own window with unique name
      // Pass the story ID as a URL parameter
      window.open(`${__XR_ENV_BASE__}/story?id=${story.id}`, sceneName);
    });
  };

  return (
    <div
      className="app-container"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
          fontFamily: "'Futura', 'Futura Bold', sans-serif",
          fontWeight: "700",
        }}
      >
        Frame Stories
      </h1>

      <div className="card" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Futura', sans-serif", fontWeight: "600" }}>
          Featured Stories
        </h2>
        <p style={{ margin: "20px 0", fontFamily: "'Futura', sans-serif" }}>
          Experience immersive documentary journalism in Vision Pro
        </p>

        <button
          onClick={openAllStoriesScenes}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#FF6B35",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
            fontFamily: "'Futura', 'Futura Bold', sans-serif",
            fontWeight: "700",
            transition: "transform 0.2s",
          }}
        >
          Launch Stories
        </button>

        <p
          style={{
            marginTop: "20px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Futura', sans-serif",
          }}
        >
          Opens Frame logo + 5 story windows
        </p>
      </div>
    </div>
  );
}

function StoryPage() {
  // Get story ID from URL parameters
  const params = new URLSearchParams(window.location.search);
  const storyId = parseInt(params.get("id") || "1");

  const stories = [
    {
      id: 1,
      title: "Argentina's Dirty War",
      description:
        "Four women's stories of life under Argentina's 1976-1983 dictatorship.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FHomepage_Argentina.jpg&w=1080&q=75",
      url: "https://beta.frame.media/experimental/argentina-milei-dirty-war-plaza-de-mayo-detention-centers",
    },
    {
      id: 2,
      title: "Into the Gap",
      description:
        "How the most dangerous jungle in the world became a dastardly rite of passage for migrant children.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2Fdarien_sharecard.png&w=1080&q=75",
      url: "https://beta.frame.media/experimental/darien-gap-migrants-unhcr-panama",
    },
    {
      id: 3,
      title: "A Stolen Generation",
      description:
        "In the 1990s and early 2000s, the Philippines was the kidnapping capital of the world. Today, victims are finally telling their stories.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FPhilippines_sharecard.jpg&w=1080&q=75",
      url: "https://beta.frame.media/experimental/philippines-kidnap-victims-stolen-generation-marcos",
    },
    {
      id: 4,
      title: "The Logging Quagmire",
      description:
        "How one of California's biggest industries amplified an era of destructive wildfires.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FGettyImages-1234144015.jpg&w=1080&q=75",
      url: "https://beta.frame.media/experimental/park-fire-paradise-dixie-calfire-logging-quagmire",
    },
    {
      id: 5,
      title: "Living in the Shadow of Gas Flaring",
      description:
        "In Nigeria, gas flaring has upended lives for decades. New reforms could change that.",
      image:
        "https://www.frame.media/_next/image?url=https%3A%2F%2Fd1no4zdj676ab.cloudfront.net%2Fmedia%2Fhomepage%2FGas_flaring.png&w=1080&q=75",
      url: "https://beta.frame.media/experimental/gas-flaring-nigeria-climate-change",
    },
  ];

  const story = stories.find((s) => s.id === storyId) || stories[0];

  const handleClick = () => {
    // Open the Frame story in a new window
    window.open(story.url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundColor: "#000",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          backgroundImage: `url(${story.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "#000",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: "white",
            margin: 0,
            fontSize: "32px",
            fontFamily:
              "'Futura', 'Futura Bold', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          {story.title}
        </h2>
        <p
          style={{
            color: "white",
            margin: 0,
            fontSize: "18px",
            fontFamily:
              "'Futura', 'Futura Medium', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: "500",
            lineHeight: "1.4",
            opacity: 0.95,
          }}
        >
          {story.description}
        </p>
      </div>
    </div>
  );
}

function LogoPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <img
        src="https://raw.githubusercontent.com/Frame-One-Software/frame-one.github.io/main/images/frame-logo.svg"
        alt="Frame Logo"
        style={{
          width: "80%",
          height: "auto",
          maxWidth: "400px",
        }}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            const textDiv = document.createElement("div");
            textDiv.style.fontSize = "120px";
            textDiv.style.fontFamily = "'Futura', 'Futura Bold', sans-serif";
            textDiv.style.fontWeight = "700";
            textDiv.style.color = "#000";
            textDiv.style.textAlign = "center";
            textDiv.style.lineHeight = "1";
            textDiv.textContent = "FRAME";
            parent.appendChild(textDiv);
          }
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router basename={__XR_ENV_BASE__}>
      <Routes>
        <Route path="/logo" element={<LogoPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/stories" element={<SecondPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
