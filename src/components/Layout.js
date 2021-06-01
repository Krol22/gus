import React from "react";
import styled from "styled-components";

import Fonts from "../styled/Fonts";
import GlobalStyles from "../styled/GlobalStyles";
import Typography from "../styled/Typography";
import Utils from "../styled/UtilsStyles";

const StyledLayout = styled.div`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
`;

export default function Layout({children}) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      <Typography />
      <Utils />
      <StyledLayout>
        {children}
      </StyledLayout>
    </>
  )
}
