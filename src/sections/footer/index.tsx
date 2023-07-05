import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-image: linear-gradient(315deg, #0b0b0b64 5%, var(--color-primary-dark) 95%);
`;

const StyledFooterContent = styled.span`
  color: #fff;
  font-size: 1.25vh;
  line-height: 40px;
  font-family: "Raleway";
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        Built with Vite, Tailwind CSS + Styled Components. Designed and coded by James Hong - 2023
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
