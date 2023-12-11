import Title from "../../../Utils/Title";


const Skill = () => {
  return (
    <div id="skills">
      <div className="my-20 container mx-auto">
        <Title></Title>
        <h1 className="text-3xl font-semibold  text-main text-center my-2">
          MY SKILLS
        </h1>
        <p className="text-center text-main my-2">#Things I Know</p>
        <div className="grid lg:grid-cols-9 grid-cols-3 justify-center">
          <img src="https://i.ibb.co/dtqLR7P/icons8-html-5-144.png" alt="" />
          <img src="https://i.ibb.co/61szNJk/icons8-css3-144.png" alt="" />
          <img className="animate-bounce duration:1s ease-in-out"
            src="https://i.ibb.co/6s46TzN/icons8-tailwind-css-144.png"
            alt=""
          />
          <img
            src="https://i.ibb.co/0h8J8ZB/icons8-javascript-144.png"
            alt=""
          />
         <img className="animate-spin duration-[2000ms] ease-in-out" src="https://i.ibb.co/Jq2Ygqn/icons8-react-144.png" alt="" />


          <img className="" src="https://i.ibb.co/4mzVqrD/icons8-firebase-144.png" alt="" />
          <img className="" src="https://i.ibb.co/dLr9RBY/icons8-node-js-144.png" alt="" />
          <img src="https://i.ibb.co/XSNTYwV/icons8-express-js-144-2.png" alt="" />
          <img src="https://i.ibb.co/kX7cM1S/icons8-mongo-db-96.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
