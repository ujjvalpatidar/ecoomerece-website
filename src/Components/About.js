import { useProductContext } from "./Productcontex";
import Section from "./Section";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name:"Uvi Ecommerce",
  };

  return (
  <> 
  {myName}
  <Section mydata={data} />
  </>
  );
};


export default About;