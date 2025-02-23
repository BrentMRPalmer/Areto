import Register from "../components/Register"; // Import the Register component

const Home = () => {
  return (
    <div className="px-32 mt-12">
      <h1 className="text-5xl font-bold mb-6">Home</h1>
      <p className="text-lg mb-6">Join us by registering below:</p>

      {/* Include the Register form inside Home */}
      <Register />
    </div>
  );
};

export default Home;