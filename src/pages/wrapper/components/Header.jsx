import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex flex-row gap-2 mt-2">
          <li className="px-4 py-2 bg-white">
            <NavLink to="/">Main</NavLink>
          </li>
          <li className="px-4 py-2 bg-white">
            <NavLink to="/users">Users</NavLink>
          </li>
          <li className="px-4 py-2 bg-white">
            <NavLink to="/albums">Albums</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
