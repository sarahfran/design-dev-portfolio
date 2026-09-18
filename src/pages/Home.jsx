import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Hi, I'm a UX Designer</h1>
      <p>Welcome to my portfolio.</p>
      <nav>
        <Link to="/project/mobile-app">View Mobile App Case Study</Link>
      </nav>
    </div>
  );
}