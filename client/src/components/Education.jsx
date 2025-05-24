import { useEffect, useState } from "react";
import axios from "axios";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/education')
      .then(res => setEducation(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section>
      <h2>Education</h2>
      {education.map(edu => (
        <div key={edu.id}>
          <h3>{edu.degree} - {edu.institution}</h3>
          <p>{edu.year}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;