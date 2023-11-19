import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMediaQuery } from 'react-responsive';

const Tech = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex justify-center items-center" key={technology.name}>
          {isMobile ? 
            <img src={technology.icon} alt={technology.name} />
            : 
            <BallCanvas icon={technology.icon} />
          }
        </div>
      ))}
    </div>
  );
};


export default SectionWrapper(Tech, "");