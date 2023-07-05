import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-image: linear-gradient(315deg, #0b0b0b64 5%, var(--color-primary-dark) 95%);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span className="text-xs font-light">2023. Designed and built with Vite, Tailwind CSS + Styled Components</span>
    </StyledFooter>
  );
};

export default Footer;
