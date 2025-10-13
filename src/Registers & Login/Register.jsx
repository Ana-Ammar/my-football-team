import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { auth } from "../firebase/firebase.init";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [error, setError] = useState('')

    const handleSignUpWithEmailPass = (e) => {
        e.preventDefault()

        // Error and Succes
        setError('')

        // Create User
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
        .catch(error => {setError(error.message)})
        
    }

  return (
    <div className="ml-16 bg-base-content border-2 border-gray-400 w-[460px] card">
      <form
      onSubmit={handleSignUpWithEmailPass} 
      className="card-body">
        <h1 className="text-white font-bold text-3xl">Sign Up</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-white/50">Name</legend>
          <input 
          type="text"
          onChange={(e) => setName(e.target.value)} 
          className="input" 
          placeholder="Type here" />

          <legend className="fieldset-legend text-white/50">Photo Url</legend>
          <input 
          type="text"
          onChange={(e) => setPhotoUrl(e.target.value)} 
          className="input" 
          placeholder="Type here" />

          <legend className="fieldset-legend text-white/50">Email</legend>
          <input 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="input" 
          placeholder="Type here" />

          <legend className="fieldset-legend text-white/50">Password</legend>
          <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input" 
          placeholder="Type here" />

          <label className="label mt-1 text-white">
            <input 
            type="checkbox" 
            className="checkbox checkbox-primary checkbox-xs" />
            Accept our terms and conditions
          </label>

        </fieldset>
        <button className="btn btn-soft btn-primary mt-2 btn-sm">Sign Up</button>

        {
            error && <p className="text-red-500 font-semibold">{error}</p>
        }

        {/* <div className="flex items-center text-white mt-2 font-bold justify-evenly">
          Sign Up with
          <button class="btn btn-soft btn-primary btn-sm">
            <FaGoogle />
          </button>
          or
          <button class="btn btn-soft btn-primary btn-sm">
            <FaGithub />
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Register;
