import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Header";

const MenuList = [
  {
    MenuId: 1,
    MenuName: "New",
    MenuLink: "",
  },
  {
    MenuId: 2,
    MenuName: "Best",
    MenuLink: "",
  },
  {
    MenuId: 3,
    MenuName: "Necklace",
    MenuLink: "",
  },
  {
    MenuId: 4,
    MenuName: "Earrings",
    MenuLink: "",
  },
  {
    MenuId: 5,
    MenuName: "Rings",
    MenuLink: "",
  },
];

function SideNav() {
  const location = useRouter();
  const pathname = location.pathname;

  return (
    <SideNavWrap>
      <Logo>
        <img src={`assets/img/web_logo.svg`} />
      </Logo>
      <BtnClose>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46L13.46 12Z"
          />
        </svg>
      </BtnClose>

      <NavList>
        {MenuList.map((item) => {
          return (
            <NavItem key={item.MenuId}>
              <NavLink href="/mypage/account">{item.MenuName}</NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </SideNavWrap>
  );
}

const SideNavWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #fff;
  z-index: 100;
  padding: 1rem;
`;

const BtnClose = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 10px;
`;

const NavList = styled.ul`
  margin-top: 5rem;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  font-family: "Roboto Serif", serif;
  letter-spacing: 1px;
`;

export default SideNav;
