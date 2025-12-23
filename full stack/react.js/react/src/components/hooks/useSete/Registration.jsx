
// //* Using Object State with Spread Operator
// //todo Tasks:
// //? Refactor the registration form to use a single object (formData) as the
// initial state.
// //? Update input fields to use object properties.
// //? Use the spread operator to update the form data state efficiently.
// //? Discuss the benefits of using object state over multiple state variables.






import { useState } from "react";
import "./index.css";

export const Registration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  // Handle input change using name + spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>

          <label><b>First Name</b></label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={user.firstName}
            onChange={handleChange}
            required
          />

          <label><b>Last Name</b></label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={user.lastName}
            onChange={handleChange}
            required
          />

          <label><b>Email</b></label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label><b>Password</b></label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <label><b>Phone Number</b></label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="8849052296"
            value={user.phoneNumber}
            onChange={handleChange}
            required
          />

          <p className="terms">
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>
          </p>

          <button type="submit">Sign Up</button>
        </div>
      </form>

      {/* Summary Section */}
      <section className="summary">
        <p>
          Hello, my name is
          <span> {user.firstName} {user.lastName}</span>.
          My email address is <span>{user.email}</span> and phone number is
          <span> {user.phoneNumber}</span>
        </p>
      </section>
    </>
  );
};
