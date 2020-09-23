// @flow
async function toJson(response) {
  const result = await response.json();
  return result;
}

export async function fetchUserCall() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}users`);
  const result = await response.json();
  return result;
}

export async function fetchAlbumCall(action) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}albums?userId=${action.id}`);
  return await toJson(response);
}

export async function fetchCommentCall(action) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}comments?postId=${action.id}`);
  return await toJson(response);
}

export async function fetchPhotoCall(action) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}photos?albumId=${action.id}`);
  return await toJson(response);
}

export async function fetchPostCall(action) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}posts?userId=${action.id}`);
  return await toJson(response);
}
