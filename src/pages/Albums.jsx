import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import fetchData from "../services/api";
import getRoute from "../helpers/getRoute";
import { API_URL } from "../constants";

export default function Albums() {
  const { pathname } = useLocation();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const url = `${API_URL}${pathname}`;
      const data = await fetchData(url);
      setAlbums(data);
    };

    fetchAlbums();
  }, [pathname]);

  return (
    <div>
      <h1>Albums page</h1>
      <ul className="app-list p-2 mt-2 bg-white">
        {albums.map((album) => (
          <Link key={album.id} to={getRoute(album.userId, album.id)}>
            {album.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
