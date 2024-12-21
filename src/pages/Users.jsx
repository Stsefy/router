import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import fetchData from "../services/api";
import getRoute from "../helpers/getRoute";
import { API_URL } from "../constants";

export default function Users() {
  const { pathname } = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = `${API_URL}${pathname}`;
      const data = await fetchData(url);
      setUsers(data);
    };

    fetchUsers();
  }, [pathname]);

  return (
    <div>
      <h1>Users page</h1>
      <ul className="app-list p-2 mt-2 bg-white">
        {users.map((user) => (
          <Link key={user.id} to={getRoute(user.id)}>
            {user.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
