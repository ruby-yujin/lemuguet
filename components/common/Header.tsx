import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import SideNav from "./SideNav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <HeaderContainer>
      {/* 모바일버튼 추가  */}
      <BtnMenu href="/" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
          />
        </svg>
      </BtnMenu>

      <Logo>
        <img src={`assets/img/web_logo.svg`} />
      </Logo>
      <Gnb>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6-8q.825 0 1.413-.588T14 8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8q0 .825.588 1.413T12 10Zm0-2Zm0 10Z"
              />
            </svg>
          </a>
        </li>
      </Gnb>
      {isOpen ? <SideNav handleToggle={handleToggle} /> : <></>}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
`;

const BtnMenu = styled(Link)`
  display: block;
  border: 1px solid #fff;
  padding-left: 10px;
`;

export const Logo = styled.div`
  width: 150px;
`;

const Gnb = styled.ul`
  display: flex;
`;

export default Header;
