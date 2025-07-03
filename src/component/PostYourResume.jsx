import React, { useState } from "react";
import { useApplyJobMutation } from "../features/job/jobApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostYourResume = () => {
  const [applyJob, { isLoading }] = useApplyJobMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
  });

  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      toast.error("❌ Please upload PDF file only!");
      e.target.value = "";
      return;
    }
    setResume(file);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let message = "";

    if (!value.trim()) message = "This field is required";
    else if (name === "email" && !emailRegex.test(value)) message = "Invalid email format";
    else if (name === "phone" && !phoneRegex.test(value)) message = "Phone must be 10 digits and start with 6-9";

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, designation } = formData;

    let validationErrors = {};
    if (!name.trim()) validationErrors.name = "Name is required";
    if (!emailRegex.test(email)) validationErrors.email = "Invalid email format";
    if (!phoneRegex.test(phone)) validationErrors.phone = "Invalid phone number";
    if (!designation.trim()) validationErrors.designation = "Designation required";
    if (!resume) validationErrors.resume = "PDF Resume required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("❌ Please fix validation errors", { autoClose: 2000 });
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("phone", phone);
    form.append("designation", designation);
    form.append("resume", resume);

    try {
      const res = await applyJob(form).unwrap();
      toast.success("✅ Application submitted successfully!", { autoClose: 2000 });

      setFormData({ name: "", email: "", phone: "", designation: "" });
      setResume(null);
      setErrors({});
      e.target.reset();
    } catch (err) {
      toast.error("❌ Submission failed!", { autoClose: 2000 });
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        className="form-control my-2"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && <p className="text-danger">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="form-control my-2"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && <p className="text-danger">{errors.email}</p>}

      <input
        type="text"
        name="phone"
        placeholder="+91 0000000000"
        className="form-control my-2"
        value={formData.phone}
        onChange={(e) => {
          const onlyNums = e.target.value.replace(/[^0-9]/g, "");
          setFormData({ ...formData, phone: onlyNums });
        }}
        maxLength={10}
        onBlur={handleBlur}
      />
      {errors.phone && <p className="text-danger">{errors.phone}</p>}

      <textarea
        name="designation"
        placeholder="Designation"
        className="form-control my-2"
        rows="2"
        value={formData.designation}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.designation && <p className="text-danger">{errors.designation}</p>}

      <input
        type="file"
        name="resume"
        accept="application/pdf"
        className="form-control my-2"
        onChange={handleFileChange}
      />
      {errors.resume && <p className="text-danger">{errors.resume}</p>}

      <button type="submit" className="btn TGreen mt-2" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default PostYourResume;
