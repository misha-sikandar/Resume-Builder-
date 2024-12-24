import { useState } from "react";

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  education: string;
  experience: string;
  skills: string;
};

export default function EditableResumeBuilder() {
  const [resume, setResume] = useState<ResumeData | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload on form submission

    const formData = new FormData(event.currentTarget);

    const resumeData: ResumeData = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      linkedin: (formData.get("linkedin") as string) || "",
      education: (formData.get("education") as string) || "",
      experience: (formData.get("experience") as string) || "",
      skills: (formData.get("skills") as string) || "",
    };

    setResume(resumeData);
  };

  const makeEditable = () => {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach((element) => {
      element.addEventListener("click", function () {
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || "";

        if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
          const input = document.createElement("input");
          input.type = "text";
          input.value = currentValue;
          input.classList.add("editing-input");
          input.addEventListener("blur", function () {
            currentElement.textContent = input.value;
            currentElement.style.display = "inline";
            input.remove();
          });

          currentElement.style.display = "none";
          currentElement.parentNode?.insertBefore(input, currentElement);
          input.focus();
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Editable Resume Builder
      </h1>

      <form
        id="resume-form"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-4"
      >
        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">
            Personal Information
          </legend>
          <div className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-600 font-medium">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="linkedin"
                className="block text-gray-600 font-medium"
              >
                LinkedIn:
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="Enter your LinkedIn profile"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">
            Education
          </legend>
          <textarea
            id="education"
            name="education"
            placeholder="Enter your education details"
            rows={4}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">
            Work Experience
          </legend>
          <textarea
            id="experience"
            name="experience"
            placeholder="Enter your work experience"
            rows={4}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">
            Skills
          </legend>
          <textarea
            id="skills"
            name="skills"
            placeholder="Enter your skills"
            rows={4}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700"
        >
          Generate Resume
        </button>
      </form>

      {resume && (
        <div
          id="resume-display"
          className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-8"
          contentEditable={true}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Editable Resume
          </h2>
          <p>
            <b>Name:</b>{" "}
            <span id="edit-name" className="editable">
              {resume.name}
            </span>
          </p>
          <p>
            <b>Email:</b>{" "}
            <span id="edit-email" className="editable">
              {resume.email}
            </span>
          </p>
          <p>
            <b>Phone:</b>{" "}
            <span id="edit-phone" className="editable">
              {resume.phone}
            </span>
          </p>
          <p>
            <b>LinkedIn:</b>{" "}
            <span id="edit-linkedin" className="editable">
              {resume.linkedin}
            </span>
          </p>
          <h3 className="text-xl font-semibold text-gray-700">Education</h3>
          <p id="edit-education" className="editable">
            {resume.education}
          </p>
          <h3 className="text-xl font-semibold text-gray-700">Work Experience</h3>
          <p id="edit-experience" className="editable">
            {resume.experience}
          </p>
          <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
          <p id="edit-skills" className="editable">
            {resume.skills}
          </p>
        </div>
      )}
    </div>
  );
}
