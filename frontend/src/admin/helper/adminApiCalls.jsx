import { API } from "../../backend";
import { isAuthenticated } from "../auth/helper/index";
export const getOverview = () => {
  let token = isAuthenticated().token;
  return fetch(`${API}/getOverview`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getEvents = () => {
  let token = isAuthenticated().token;
  return fetch(`${API}/getEvents`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const createTeamMember = (teamMember) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/createMemeber`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: teamMember,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
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

export const deleteTeamMember = (memberId) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/deleteMember/${memberId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getTeamMember = (memberId) => {
  return fetch(`${API}/getTeamMember/${memberId}`, {
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
export const updateTeamMember = (teamMemberId, teamMember) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/updateTeamMember/${teamMemberId}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: teamMember,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const uploadImage = (image) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/uploadImage`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: image,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getAllImages = () => {
  let token = isAuthenticated().token;
  return fetch(`${API}/getAllImages`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
export const getImageById = (imageId) => {
  return fetch(`${API}/getImage/${imageId}`, {
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

export const deleteImage = (imageId) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/deleteImage/${imageId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const updateImage = (imageId, image) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/updateImage/${imageId}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: image,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const addVideo = (video) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/addVideo`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: video,
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

export const getVideo = (videoId) => {
 
  return fetch(`${API}/getVideo/${videoId}`, {
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

export const deleteVideo = (videoId) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/deleteVideo/${videoId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const updateVideo = (videoId, video) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/updateVideo/${videoId}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: video,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const addStartup = (startup) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/addStartup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: startup,
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

export const getStartup = (startupId) => {
  return fetch(`${API}/getStartup/${startupId}`, {
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

export const deleteStartup = (startupId) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/deleteStartup/${startupId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const updateStartup = (startupId, startup) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/updateStartup/${startupId}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: startup,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const addTestimonial = (testimonial) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/addTestimonial`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: testimonial,
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

export const getTestimonial = (testimonialId) => {
  
  return fetch(`${API}/getTestimonial/${testimonialId}`, {
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

export const deleteTestimonial = (testimonialId) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/deleteTestimonial/${testimonialId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const updateTestimonial = (testimonialId, testimonial) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/updateTestimonial/${testimonialId}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: testimonial,
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const getContactUs = () => {
  let token = isAuthenticated().token;
  return fetch(`${API}/getContactUs`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
export const addEvent = (event) => {
  let token = isAuthenticated().token;
  console.log(JSON.stringify(event));
  return fetch(`${API}/addEvent`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(event),
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

export const deleteEvent = (eventId) => {
  let token = isAuthenticated().token;
  return fetch(`${API}/deleteEvent/${eventId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};

export const updateEvent = (eventId, event) => {
  let token = isAuthenticated().token;
  console.log(event);
  return fetch(`${API}/updateEvent/${eventId}/`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(event),
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return { error: response.status };
    })
    .catch((err) => {
      return { error: "Something went wrong. Try again" };
    });
};
