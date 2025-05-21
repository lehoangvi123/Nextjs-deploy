export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-lg">
          I’m Lê Hoàng Vĩ, a final-year Software Engineering student at Ho Chi Minh City University of Technology (HCMU). I have a strong foundation in programming, database principles, and digital systems. I’m eager to contribute to innovative projects and collaborate with talented teams.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="text-lg">
          <strong>Bachelor of Engineering in Software Engineering</strong><br />
          Ho Chi Minh City University of Technology (HCMU)<br />
          2021 - Present
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Certificates & Achievements</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>Passed the English entrance exam at Ho Chi Minh City International University with an IELTS score of 6.5.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p className="text-lg">
          <strong>Programming Languages:</strong> Java, C, JavaScript, TypeScript, Go, Python, JSX<br />
          <strong>Databases:</strong> MySQL, SQL Server, MongoDB<br />
          <strong>Frameworks & Technology:</strong> Node.js, ReactJS, Bootstrap, Spring Boot, Docker, Git, GitHub<br />
          <strong>Soft Skills:</strong> Self-learning, Problem-solving
        </p>
      </section>
    </div>
  );
}