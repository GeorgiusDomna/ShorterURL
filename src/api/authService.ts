const baseUrl = 'https://front-test.hex.team/api/';

const login = async (username: string, password: string) => {
  try {
    const res = await fetch(`${baseUrl}login`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail);
    }
    return await res.json();
  } catch (error) {
    alert((error as Error).message);
  }
}


const registration = async (username: string, password: string) => {
  try {
    const res = await fetch(`${baseUrl}register?username=${username}&password=${password}`, {
      method: 'POST',
      headers: {
        accept: 'application/json'
      }
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail);
    }
    return res.ok;
  } catch (error) {
    alert((error as Error).message);
  }
}

export const auth = async (signMode: boolean, username: string, password: string) => {
  if (!signMode) {
    const res = await registration(username, password);
    if (!res) return
  }
  return await login(username, password);
}