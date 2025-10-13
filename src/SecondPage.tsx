import { useState } from "react";
import "./App.css";
import { SpatialDiv } from "@webspatial/react-sdk";

interface Story {
  id: number;
  title: string;
  color: string;
  iframeUrl?: string;
}

const stories: Story[] = [
  { id: 1, title: "Breaking: Tech Innovation Breakthrough", color: "#FF6B6B" },
  { id: 2, title: "Sports Update: Championship Finals", color: "#4ECDC4" },
  { id: 3, title: "Weather Alert: Sunny Skies Ahead", color: "#45B7D1" },
  { id: 4, title: "Entertainment: New Movie Releases", color: "#96CEB4" },
  { id: 5, title: "Business: Market Trends Analysis", color: "#FFEAA7" },
];

function StoryWindow({
  story,
  position,
  onStoryClick,
}: {
  story: Story;
  position: { x: number; y: number; z: number };
  onStoryClick: (story: Story) => void;
}) {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
    onStoryClick(story);
  };

  return (
    <SpatialDiv
      className="story-window"
      spatialStyle={{
        position: { x: position.x, y: position.y, z: position.z },
        material: { type: "thick" },
        cornerRadius: 12,
      }}
      style={{
        width: "300px",
        height: "200px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: story.color,
          padding: "20px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transition: "transform 0.3s ease",
          borderRadius: "12px",
        }}
        onClick={handleClick}
      >
        {!showIframe ? (
          <>
            <h3
              style={{
                color: "white",
                margin: 0,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {story.title}
            </h3>
            <p
              style={{
                color: "white",
                margin: "10px 0 0 0",
                fontSize: "14px",
                opacity: 0.9,
              }}
            >
              Click to read full story
            </p>
          </>
        ) : (
          <iframe
            src="https://example.com"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "8px",
            }}
            title={story.title}
          />
        )}
      </div>
    </SpatialDiv>
  );
}

function SecondPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
    console.log(`Clicked on story: ${story.title}`);
  };

  const storyPositions = [
    { x: 0.1, y: 0.1, z: -0.2 },
    { x: 0.5, y: 0.15, z: -0.3 },
    { x: 0.9, y: 0.2, z: -0.25 },
    { x: 0.3, y: 0.4, z: -0.35 },
    { x: 0.7, y: 0.35, z: -0.18 },
  ];

  return (
    <div
      className="app-container"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
        Vision Pro News Stories
      </h1>

      {stories.map((story, index) => (
        <StoryWindow
          key={story.id}
          story={story}
          position={storyPositions[index]}
          onStoryClick={handleStoryClick}
        />
      ))}

      {selectedStory && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            padding: "10px",
          }}
        >
          Selected: {selectedStory.title}
        </div>
      )}
    </div>
  );
}

export default SecondPage;
