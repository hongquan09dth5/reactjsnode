import { Space } from 'antd';
import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolbarWithBigDevice = styled(Space)`
  display: none;
  @media (min-width: 991px) {
    display: inline-flex;
  }
`;

export const ToolbarWithSmallDevice = styled(Space)`
  display: none;
  @media (max-width: 991px) {
    display: inline-flex;
  }
`;
