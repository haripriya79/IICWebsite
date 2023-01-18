import { API } from "../backend";
export const getTeam = () => {
  return fetch(`${API}/getTeam`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getImages = (type) => {
  return fetch(`${API}/getImages/${type}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const addContact = (contact) => {
  return fetch(`${API}/addContact`, {
    method: "POST",

    body: contact,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getStartups = () => {
  return fetch(`${API}/getStartups`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getTestimonials = () => {
  return fetch(`${API}/getTestimonials`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getAllEvents = () => {
  return fetch(`${API}/getEvents`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const getEvent = (eventId) => {
  return fetch(`${API}/getEvent/${eventId}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getVideos = () => {
  return fetch(`${API}/getVideos`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
