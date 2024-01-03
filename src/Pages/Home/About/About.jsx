import Title from "../../../Utils/Title";

const About = () => {
  return (
    <div className="lg:max-w-7xl mx-auto text-white w-[90vw]" id="about">
      <Title></Title>

      <div className="min-w-1/2  text-center lg:text-left">
        <h3 className="border-2 mx-auto lg:mx-0 text-2xl border-main w-44  px-4 py-2 rounded-tr-none rounded-2xl rounded-bl-none text-center">
          About Me
        </h3>
        <div className="bg-gray-700 p-8 mt-4 rounded-2xl">
          <h1 className="text-3xl font-semibold text-main my-4">Hello !</h1>
          <p className="font-medium text-justify tracking-wide">
            My Name is <span className="text-main">Arafat Sabbir</span> I'm a
            dedicated Front End developer who combines technical proficiency
            with a keen eye for design, creating websites that not only meet but
            exceed user expectations in terms of both form and function,Using
            Html Css Javascript And React
          </p>
        </div>
        <div className="my-2">
          <h1 className="text-2xl font-semibold text-main my-4">
            {" "}
            My Education
          </h1>
          <div className="collapse bg-gray-700 rounded-sm font-medium tracking-wide ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <span className="">SSC</span> (Secondary School Certificate)
            </div>
            <div className="collapse-content">
              <p>Status : Finished</p>
              <p>Exam Year : 2022</p>
              <p>Institute : Madhaiya Bazar Sadim High School</p>
              <p>Gpa : 5.00</p>
            </div>
          </div>
          <div className="collapse mt-2 bg-gray-700 rounded-sm font-medium tracking-wide ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Diploma in Computer Science
            </div>
            <div className="collapse-content">
              <p>Status : Ongoing</p>
              <p>Semester : 3rd</p>
              <p>Institute : Chittagong Polytechnic Institute</p>
            </div>
          </div>
          <div className="collapse mt-2 bg-gray-700 rounded-sm font-medium tracking-wide ">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Complete Web Development - Programming Hero
            </div>
            <div className="collapse-content">
              <p>
                Completed : July 2023 - December 2023 
              </p>
              <p>Have completed web
                development under my super mentor Jhankar Mahbub. One of the
                best teacher I ever had in my life. Here, I've gone through one
                of the toughest and best jouney of learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
