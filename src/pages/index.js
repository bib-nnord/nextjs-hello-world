import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name ist erforderlich";
    if (!formData.email) {
      newErrors.email = "Email ist erforderlich";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email ist ungültig";
    }
    if (!formData.nachricht) newErrors.nachricht = "Nachricht ist erforderlich";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", nachricht: "" });
    setErrors({});
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <p>Hello World. Hallo, wir testen hier Dinge.</p>

      {submitted ? (
        <p>Danke für deine Nachricht!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div>
            <label>Nachricht</label>
            <textarea
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
            />
            {errors.nachricht && <p style={{ color: "red" }}>{errors.nachricht}</p>}
          </div>

          <button type="submit" style={{ padding: "0.5rem 1rem" }}>Absenden</button>
        </form>
      )}
    </div>
  );
}
