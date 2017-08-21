/**
 * Created by Yuicon on 2017/7/4.
 * https://github.com/Yuicon
 */
import 'whatwg-fetch';

const getURL = (url) => 'http://139.224.135.86:8080/' + url;

export const currentUser = (token) => {
  return fetch(getURL("users/current"), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const register = (newUser) => {
  return fetch(getURL("auth/register"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const login = (user) => {
  return fetch(getURL("auth/login"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const entryCreate = (entry, token) => {
  return fetch(getURL("entries"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(entry)
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const entries = (page = 0, size = 15, token) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return fetch(getURL(`entries?page=${page}&size=${size}`), {
    method: 'GET',
    headers: headers
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const entriesByUser = (page = 0, size = 15, username) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return fetch(getURL(`entries/user?page=${page}&size=${size}&username=${username}`), {
    method: 'GET',
    headers: headers
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const updateEntry = (entry, token) => {
  return fetch(getURL(`entries/${entry.get('id')}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(entry)
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};

export const likeEntry = (eid, token) => {
  return fetch(getURL(`entries/like/${eid}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(ex => console.log('parsing failed', ex));
};
