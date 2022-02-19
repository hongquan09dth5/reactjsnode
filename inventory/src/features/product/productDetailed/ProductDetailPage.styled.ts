import { Space } from "antd";
import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0;

  @media (min-width: 991px) {
    font-size: 3.6rem;
  }
`;

export const ShortDescription = styled.p`
  margin-bottom: 25px;

  @media (min-width: 991px) {
    font-size: 1.25rem;
  }
`;

export const ColumnHeader = styled.td`
  width: 200px;
  padding: 12px 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
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
