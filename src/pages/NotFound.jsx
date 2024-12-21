import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Not found page</h1>
      <Link to="/">
        <p>Go to Main Page</p>
      </Link>
    </div>
  );
}
