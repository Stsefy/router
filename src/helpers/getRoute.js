export default function getRoute(userId, albumId) {
  if (userId && albumId) return `/users/${userId}/albums/${albumId}`;
  if (userId) return `/users/${userId}/albums`;
  return "/notFound";
}
