import { API } from "../../../backend";

export const signup = user => {
    return fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();

        })
         .catch((err)=>{ return {error:"Something went wrong. Try again"}});
};

export const signin = user => {
    return fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
       
            return response.json(); 

        })
        .catch((err)=>{ return {error:"Something went wrong. Try again"}});
};
export const updatePassword = (password) => {
    let auth = isAuthenticated();
    let token = auth.token;
    let userId = auth.user._id;
    let email = auth.email;
    return fetch(`${API}/changePassword/${userId}/`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json",        
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email:email,
        password:password
      }),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return { error: response.status };
      })
      .catch((err) => {
        return { error: "Something went wrong. Try again" };
      });
  };

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();

        return fetch(`${API}/signout`, {
                method: "GET"
            })
            .then(response => console.log("signout success"))
             .catch((err)=>{ return {error:"Something went wrong. Try again"}});
    }
};

export const isAuthenticated = () => {
   
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
      
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
};