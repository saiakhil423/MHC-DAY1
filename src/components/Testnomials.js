import React from "react";

export default function Testnomials() {
  const courses = [
    {
      title: "Artificial Intelligence & Machine Learning",
      image: "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "Dive into the world of AI and ML to build innovative solutions.",
      link: "/aiml",
    },
    {
      title: "Data Science",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
      description: "Learn to analyze data and extract meaningful insights.",
      link: "/datascience",
    },
    {
      title: "Generative AI",
      image: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "Explore the cutting-edge technology of Generative AI.",
      link: "/genai",
    },
    {
      title: "Internet of Things (IoT)",
      image: "https://plus.unsplash.com/premium_photo-1688678097958-0620a452f0e8?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "Understand IoT systems and how they shape the world.",
      link: "/iot",
    },
    {
      title: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "Master the art of cloud-based development and deployment.",
      link: "/cloudcomputing",
    },
    {
      title: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      description: "Protect systems and networks with cybersecurity skills.",
      link: "/cybersecurity",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Explore Our Courses</h2>
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href={course.link} className="btn btn" style={{ backgroundColor: "#fb6e50" }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
