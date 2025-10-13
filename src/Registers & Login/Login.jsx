import bgImage2 from "../assets/bgTwo.jpg";
import Register from "./Register";

const Login = () => {
  return (
    <div
      className="max-w-7xl mx-auto min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage2})` }}
    >
      <div className="bg-black/60 w-full h-screen flex items-center">
      
        <Register></Register>
      </div>
    </div>
  );
};

export default Login;
