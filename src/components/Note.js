import styled from "styled-components";
import { metrics } from "../themes";

const Note = styled.div`
  margin-bottom: ${metrics.baseUnit}px;
  line-height: 2;
  font-size: ${metrics.regularText}px;
  @media (max-width: 480px) {
    font-size: ${metrics.smallText}px;
  }
`;

export default Note;
