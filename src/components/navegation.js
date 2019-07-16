import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1em;
`

const routerData = [
  {
    label: "Blog",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "About Me",
    path: "/about-me",
  },
]

export default props => {
  const links = routerData.map(({ label, path }) => (
    <Link style={{ boxShadow: `none` }} to={path} key={path}>
      {label}
    </Link>
  ))
  return <Menu>{links}</Menu>
}
