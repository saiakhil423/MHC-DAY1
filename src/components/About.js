import React from "react";

export default function About() {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              className="d-block w-100"
              autoPlay
              loop
              muted
              style={{ maxHeight: "600px", objectFit: "cover" }}
            >
              <source
                src="https://mh-cognition.blr1.cdn.digitaloceanspaces.com/Enterprise/LMS_Lap_1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "left",
                maxWidth: "50%",
                top: "10%",
                left: "10%",
              }}
            >
              <h5 style={{ color: "#ff5722", fontWeight: "bold" }}>
                Empower Your Learning Journey
              </h5>
              <p>
                Explore cutting-edge education technology and take your skills
                to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
