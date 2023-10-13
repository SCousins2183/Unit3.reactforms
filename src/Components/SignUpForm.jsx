import { useState } from "react"

export default function SignUpForm({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/signup', {
          method: "POST",
          body: JSON.stringify({userName, password}),
        }
      );
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
    <h2>Sign up</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <label>
        Username: <input value={userName} onChange={(e) =>{setUserName(e.target.value)}}/>
      </label>
      <label>
        Password: <input value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
      </label>
      <button>Submit</button>
    </form>
    </>
  )
  }
  
  