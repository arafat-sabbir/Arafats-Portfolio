import Title from "../../../Utils/Title";

const About = () => {
  return (
    <div className="lg:max-w-7xl mx-auto text-white w-[90vw]" id="about">
      <Title></Title>
      <div className="flex  flex-col lg:flex-row justify-center items-center  gap-10">
        <div className="min-w-1/2  text-center lg:text-left">
          <h3 className="border-2 mx-auto lg:mx-0 text-3xl border-main w-44 text-center px-4 py-2 rounded-tr-none rounded-2xl rounded-bl-none">
            About Me
          </h3>
          <div className="bg-gray-700 p-8 mt-4 rounded-2xl">
            <h1 className="text-3xl font-semibold text-main my-4">Hello !</h1>
            <p className="font-medium lg:w-[700px] tracking-wide">
              My Name is <span className="text-main">Arafat Sabbir</span> I'm a
              dedicated Front End developer who combines technical proficiency
              with a keen eye for design, creating websites that not only meet
              but exceed user expectations in terms of both form and
              function,Using Html Css Javascript And React
            </p>
          </div>
          <div className="my-2">
          <h1 className="text-2xl font-semibold text-main my-4"> My Education</h1>
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
          </div>
        </div>
        <div className="min-w-1/2  h-full">
          <img
            className="lg:w-[1400px] lg:h-[400px] border-2  text-center mx-auto lg:mx-0  border-main  rounded-tr-none rounded-[80px] rounded-bl-none  grayscale hover:grayscale-0 duration-1000"
            src="https://i.ibb.co/MczF5Jd/programming-background-with-person-working-with-codes-computer-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
