import { StyledListItem } from "./styles";

interface ListItemProps {
  content: string;
}

const ListItem = ({ content }: ListItemProps) => {
  return <StyledListItem className="font-light">{content}</StyledListItem>;
};

export default ListItem;
