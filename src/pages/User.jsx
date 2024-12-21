import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import fetchData from "../services/api";
import getRoute from "../helpers/getRoute";
import { API_URL } from "../constants";

function UserInfo({ user }) {
  return user ? (
    <div>
      <p>
        <strong>Username: </strong>
        {user.name}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Website: </strong>
        {user.website}
      </p>
    </div>
  ) : null;
}

export default function User() {
  const params = useParams();
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const url = `${API_URL}${pathname}`;
      const data = await fetchData(url);
      setAlbums(data);
    };
    const fetchUser = async () => {
      const url = `${API_URL}/users/${params.userId}`;
      const data = await fetchData(url);
      setUser(data);
    };

    fetchAlbums();
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div>
      <h1>Contact page</h1>
      <UserInfo user={user} />
      <h2>User albums</h2>
      <ul className="app-list p-2 mt-2 bg-white">
        {albums.map((album) => (
          <Link key={album.id} to={getRoute(params.userId, album.id)}>
            {album.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
