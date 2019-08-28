import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1em;
`

const StyledLink = styled(Link)`
  ${scale(0.75)}
  color: #fff;
  margin-bottom: ${rhythm(2.5)};
  position: relative;
  box-shadow: none;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 40%;
    background-color: #ff6464;
    filter: opacity(0.75);
  }

  &.active {
    &::after {
      background-color: #01024e;
    }
  }
`

const routerData = [
  {
    label: "Introduction",
    path: "/",
  },
  {
    label: "Blog",
    path: "/blog",
  },
]

export default props => {
  const links = routerData.map(({ label, path }) => (
    <StyledLink activeClassName={"active"} to={path} key={path}>
      {label}
    </StyledLink>
  ))
  return <Menu>{links}</Menu>
}
