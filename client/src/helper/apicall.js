import { API } from "../backend";

// Repo Hosting Services
export const github = (username) => {
  return fetch(`${API}/github/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const gitlab = (username) => {
  return fetch(`${API}/gitlab/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const bitbucket = (username) => {
  return fetch(`${API}/bitbucket/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Social Media
export const facebook = (username) => {
  return fetch(`${API}/facebook/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const instagram = (username) => {
  return fetch(`${API}/instagram/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const twitter = (username) => {
  return fetch(`${API}/twitter/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
