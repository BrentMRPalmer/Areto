import { useState } from "react";
import { FormDataItem } from "@/types/form";
import { BE_SERVER_PORT } from "@/constants";
import { useAuth } from "@/context/AuthContext";

const LoginForm = () => {
  // Hook to handle authentication
  const auth = useAuth();

  // State for maintaining form values
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  // Form submission result message
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = ({ label, value }: FormDataItem) => {
    setFormData({ ...formData, [label]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // POST to student registration API
      // TODO: replace hardcoded server port
      const response = await fetch(
        `http://localhost:${BE_SERVER_PORT}/api/students/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("Logged in successfully!");
        setFormData({
          usernameOrEmail: "",
          password: "",
        }); // Clear form
        auth.loginAction(data);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {message && <p className="mb-4 text-blue-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Username Input */}
        <input
          type="text"
          name="usernameOrEmail"
          placeholder="Username/Email"
          value={formData.usernameOrEmail}
          onChange={(e) =>
            handleChange({ label: e.target.name, value: e.target.value })
          }
          className="p-2 border rounded"
          required
        />
        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            handleChange({ label: e.target.name, value: e.target.value })
          }
          className="p-2 border rounded"
          required
        />
        {/* Registration Button */}
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
