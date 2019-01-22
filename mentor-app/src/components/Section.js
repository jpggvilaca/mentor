import styled from 'styled-components';
import colors from '../colors';

const Section = styled.section`
  height: calc(100vh - 70px);
  overflow: hidden;
  padding: 20px;
  width: 100%;
`;

export const SectionTitle = styled.h1`
  color: ${colors.blue};
  margin: 20px 0 40px;
`;

export default Section;