export async function fetchUserCall() {
    let response = await fetch(`${process.env.REACT_APP_API_URL}users`);
    let result = await response.json();
    return result;
}

export async function fetchAlbumCall(action) {
    let response = await fetch(`${process.env.REACT_APP_API_URL}albums?userId=${action.id}`);
    let result = await response.json();
    return result;
}

export async function fetchCommentCall(action) {
    let response = await fetch(`${process.env.REACT_APP_API_URL}comments?postId=${action.id}`);
    let result = await response.json();
    return result;
}

export async function fetchPhotoCall(action) {
    let response = await fetch(`${process.env.REACT_APP_API_URL}photos?albumId=${action.id}`);
    let result = await response.json();
    return result;
}

export async function fetchPostCall(action) {
    let response = await fetch(`${process.env.REACT_APP_API_URL}posts?userId=${action.id}`);
    let result = await response.json();
    return result;
}
