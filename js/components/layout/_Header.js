import React from "react";
import { Link } from "react-router-dom";
import { palette } from "Style";
import styled from "styled-components";
import Navigation from "./_Navigation";
import Account from "./_Account";

const HeaderWrapper = styled.div`
  background-color: #70CED3;
  height: 60px;
  min-height: 60px;
  margin-bottom: 15px;
  display: flex;
  .headerInner {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .topLogo {
    color : white;
    font-weight : 800;
    font-size : 24px;
   
  }
  .topLogo:hover {
    cursor: pointer;
  }

  .login:hover {
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="headerInner">
        <Link to={"/"}>
          <div className="topLogo">IOT 모니터링 시스템</div>
        </Link>
        <Navigation />
        <Account />
      </div>
    </HeaderWrapper>
  );
};
