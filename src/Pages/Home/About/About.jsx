import Title from "../../../Utils/Title";

const About = () => {
  return (
    <div className="lg:max-w-7xl mx-auto text-white w-[90vw]">
      <Title></Title>
      <div className="flex  flex-col lg:flex-row justify-center items-center  gap-10">
        <div className="min-w-1/2  text-center lg:text-left">
          <h3 className="border-2 mx-auto lg:mx-0 text-3xl border-main w-44 text-center px-4 py-2 rounded-tr-none rounded-2xl rounded-bl-none">
            About Me
          </h3>
          <div className="bg-gray-700 p-8 mt-4 rounded-2xl">
            <h1 className="text-3xl font-semibold text-main my-4">Hello !</h1>
            <p className="font-medium lg:w-[700px]">My Name is <span className="text-main">Arafat Sabbir</span> And I'm a dedicated Front End  developer who combines technical proficiency with a keen eye for design, creating websites that not only meet but exceed user expectations in terms of both form and function,Using Html Css Javascript And React</p>
          </div>
        </div>
        <div className="min-w-1/2  h-full">
          <img
            className="lg:w-[1400px] lg:h-[400px] rounded-xl"
            src="https://i.ibb.co/6chhqFz/pexels-christina-morillo-1181325.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
