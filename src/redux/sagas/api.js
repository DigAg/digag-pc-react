/**
 * Created by Yuicon on 2017/7/4.
 * https://github.com/Yuicon
 */

const getURL = (url) => `http://139.224.135.86:8080/${url}`;

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
