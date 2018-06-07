const url = 'http://localhost:3001/auth/register';

export const signUp = (data) => dispatch => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then((res) => {
      console.log(res);
  })
  .catch(err => 
    console.log(err)
  );
}