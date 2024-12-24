import { useState } from 'react';

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  education: string;
  skills: string;
  experience: string;
};

export default function ResumeBuilder() {
  const [resume, setResume] = useState<ResumeData | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload on form submission

    const formData = new FormData(event.currentTarget);

    const resumeData: ResumeData = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      linkedin: (formData.get('linkedin') as string) || '',
      education: (formData.get('education') as string) || '',
      skills: (formData.get('skills') as string) || '',
      experience: (formData.get('experience') as string) || '',
    };

    setResume(resumeData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Dynamic Resume Builder</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto space-y-4"
      >
        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">Personal Information</legend>
          <div className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
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
              <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
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
              <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
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
              <label htmlFor="linkedin" className="block text-gray-600 font-medium">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="Enter your LinkedIn profile URL"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">Education</legend>
          <textarea
            id="education"
            name="education"
            placeholder="Enter your education details"
            rows={4} // Fix: Use a number here
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">Skills</legend>
          <textarea
            id="skills"
            name="skills"
            placeholder="Enter your skills"
            rows={4} // Fix: Use a number here
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </fieldset>

        <fieldset>
          <legend className="text-xl font-semibold text-gray-700 mb-2">Work Experience</legend>
          <textarea
            id="experience"
            name="experience"
            placeholder="Enter your work experience"
            rows={4} // Fix: Use a number here
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
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Generated Resume</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-600">Personal Information</h3>
              <p><b>Name:</b> {resume.name}</p>
              <p><b>Email:</b> {resume.email}</p>
              <p><b>Phone:</b> {resume.phone}</p>
              <p>
                <b>LinkedIn:</b>{' '}
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {resume.linkedin}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-600">Education</h3>
              <p>{resume.education}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-600">Work Experience</h3>
              <p>{resume.experience}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-600">Skills</h3>
              <p>{resume.skills}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
