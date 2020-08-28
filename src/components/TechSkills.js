import React from "react";

const TechSkills = ({ techSkills }) => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="font-weight-light">Tech Skills</h2>
        <br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Skill</th>
              <th scope="col">Experience</th>
            </tr>
          </thead>
          {techSkills.map((item) => (
            <tbody key={item.id}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.experience} Years</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default TechSkills;
