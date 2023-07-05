import Badge from "../../components/common/badge";
import { BadgesContainer } from "./styles";

interface BadgesProps {
  badges: Array<string>;
}
const Badges = ({ badges }: BadgesProps) => {
  return (
    <BadgesContainer className="flex flex-wrap gap-4">
      {badges.length > 0 &&
        badges.map((element) => {
          return <Badge name={element} />;
        })}
    </BadgesContainer>
  );
};

export default Badges;
