const ApplicantsList = () => {
  const applicantsContent = [
    {
      id: 1,
      avatar: "/images/resource/applicant-1.png",
      name: "Brooklyn Simmons",
      designation: "Web Developer",
    },
    {
      id: 2,
      avatar: "/images/resource/applicant-2.png",
      name: "Courtney Henry",
      designation: "Web Developer",
    },
    {
      id: 3,
      avatar: "/images/resource/applicant-3.png",
      name: "Marvin McKinney",
      designation: "Web Developer",
    },
  ];
  return (
    <>
      {applicantsContent.map((applicants) => (
        <li className="applicant" key={applicants.id}>
          <figure className="image">
            <img src={applicants.avatar} alt="resource" />
          </figure>
          <h4 className="name">{applicants.name}</h4>
          <span className="designation">{applicants.designation}</span>
        </li>
      ))}
    </>
  );
};

export default ApplicantsList;
