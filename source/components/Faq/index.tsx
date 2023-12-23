import Mobile from "./Mobile";
import Pc from "./Pc";

interface IndexProps {

}

const Faq: React.FC<IndexProps> = () => {
  return (
    <div>
      <Mobile />
      <Pc />
    </div>
  );
};

export default Faq;