import React from "react";

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#fb6e50" }}>
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold" href="/">Mh Cognition</a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white fw-semibold" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-semibold" href="/link">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-semibold" >Contact Us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input 
          className="form-control me-2 rounded-pill" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
        />
        <button className="btn btn-light rounded-pill px-4" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  );
}
