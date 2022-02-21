import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0;

  @media (min-width: 991px) {
    font-size: 3rem;
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
