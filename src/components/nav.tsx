import React from "react"
import { Nav, INavLink } from "office-ui-fabric-react/lib/Nav"

export const NavBasicExample: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      selectedAriaLabel="Selected"
      ariaLabel="Nav basic example"
      styles={{
        root: {
          width: 208,
          height: 350,
          boxSizing: "border-box",
          border: "1px solid #eee",
          overflowY: "auto",
        },
      }}
      groups={[
        {
          links: [
            {
              name: "Home",
              url: "/",
              expandAriaLabel: "Expand Home section",
              collapseAriaLabel: "Collapse Home section",
            },
            {
              name: "Blog",
              url: "/blog",
              key: "key3",
            },
          ],
        },
      ]}
    />
  )
function _onLinkClick(ev: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked")
  }
}
}


export default NavBasicExample
