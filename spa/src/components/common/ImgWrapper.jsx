import styled from "styled-components";

const ImgWrapper = ({ ratio, children }) => {
  return <StyledWrapper ratio={ratio}>{children}</StyledWrapper>;
};

export default ImgWrapper;

const StyledWrapper = styled.div`
  padding-top: ${({ ratio }) => ratio};
  position: relative;
  margin-bottom: 1.6rem;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
