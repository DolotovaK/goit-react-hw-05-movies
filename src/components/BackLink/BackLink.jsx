import { HiArrowCircleLeft } from "react-icons/hi";

const { Link } = require("react-router-dom");
const { default: styled } = require("styled-components");

const StyledLink = styled(Link)`
display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
  `;

export function BackLink({ to, children }) {
    return (
        <StyledLink to={to}>
            <HiArrowCircleLeft size="24" />
            {children}
        </StyledLink>
    );
};