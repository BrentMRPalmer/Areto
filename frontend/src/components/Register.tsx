import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import { FormDataItem } from "@/types/form";
import { BE_SERVER_PORT } from "@/constants";

const Register = () => {
  // State for maintaining form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    institution: "",
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
        `http://localhost:${BE_SERVER_PORT}/api/students`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("User registered successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          institution: "",
        }); // Clear form
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {message && <p className="mb-4 text-blue-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* First + Last Name Input */}
        <div className="flex flex-row justify-between">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={(e) =>
              handleChange({ label: e.target.name, value: e.target.value })
            }
            className="w-[48%] p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) =>
              handleChange({ label: e.target.name, value: e.target.value })
            }
            className="w-[48%] p-2 border rounded"
            required
          />
        </div>
        {/* Institution Input */}
        <Combobox
          data={[{ label: "University of Ottawa", value: "uottawa" }]}
          label="institution"
          onChange={handleChange}
        />
        {/* Username Input */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            handleChange({ label: e.target.name, value: e.target.value })
          }
          className="p-2 border rounded"
          required
        />
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
