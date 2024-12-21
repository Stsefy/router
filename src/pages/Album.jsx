import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import fetchData from "../services/api";
import getRoute from "../helpers/getRoute";
import { API_URL } from "../constants";

function CreatedBy({ user }) {
  return user ? (
    <div className="mb-4">
      <strong>Created by:</strong>
      <Link to={getRoute(user.id)}>{user.name}</Link>
    </div>
  ) : null;
}

export default function Album() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const url = `${API_URL}/photos?albumId=${params.albumId}`;
      const data = await fetchData(url);
      setAlbums(data);
    };
    const fetchUser = async () => {
      const url = `${API_URL}/users/${params.userId}`;
      const data = await fetchData(url);
      setUser(data);
    };

    fetchUser();
    fetchAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Album page</h1>
      <CreatedBy user={user} />
      <ul className="app-photos">
        {albums.map((album) => (
          <img key={album.id} src={album.url} />
        ))}
      </ul>
    </div>
  );
}
