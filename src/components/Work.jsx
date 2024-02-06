import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Row, Text } from '../ui';

const Container = styled.div`
  width: 100%;
`;

const colorToGradient = {
  blue: 'linear-gradient(231deg, rgba(62, 93, 174, 0.6) 0%, rgba(62, 93, 174, 0.12) 85.28%)',
  red: 'linear-gradient(231deg, rgba(228, 37, 12, 0.60) 0%, rgba(228, 37, 12, 0.12) 85.28%)',
  green:
    'linear-gradient(231deg, rgba(64, 165, 130, 0.60) 0%, rgba(64, 165, 130, 0.12) 85.28%)'
};

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 26px 36px;
  background-color: rgba(123, 123, 123, 0.7);
  backdrop-filter: blur(5px);

  opacity: 0;
  transition: opacity 0.3s;
`;

const Contents = styled.div`
  transition: transform 0.3s;
`;

const Display = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 20px;
  height: 340px;
  width: 100%;

  background: ${({ color }) => colorToGradient[color]};
  overflow: hidden;

  &:hover ${Description} {
    opacity: 1;
  }

  &:hover ${Contents} {
    transform: scale(1.05);
  }
`;

const Name = styled(Text)`
  margin-top: 15px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const Tags = styled(Row)`
  > :not(:last-child) {
    margin-right: 8px;
  }
`;

const Tag = styled.div`
  padding: 4px 10px;
  border: 1px solid ${({ theme }) => theme.palette.black};
  border-radius: 30px;
`;

export const Work = ({ name, tags, color, description, link, children }) => {
  const navigate = useNavigate();
  const onClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <Container>
      <Display color={color} onClick={onClick}>
        <Contents>{children}</Contents>
        <Description>
          <Text type="karla-t1" color="white">
            {description}
          </Text>
        </Description>
      </Display>
      <Name type="karla-h1" onClick={onClick}>
        {name}
      </Name>
      <Tags>
        {tags.map((tag, i) => (
          <Tag key={i}>
            <Text type="karla-t2">{tag}</Text>
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};
