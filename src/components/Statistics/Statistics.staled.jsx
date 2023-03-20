import styled from '@emotion/styled';

export const StatisticsWrap = styled.section`
  width: max-content;
  margin-bottom: 15px;
  text-align: center;
  align-items: center;
  border: 1px solid #cacaca;
  border-radius: 3px;
`;

export const Title = styled.h1`
  margin: 15px auto;
  text-transform: uppercase;
  color: #444444;
  letter-spacing: 2.14px;
  font-size: 36px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ItemWrapper = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 100px;
padding: 10px;
gap: 10px;
background-color: ${({percentage}) => (
    (percentage < 10) ? '#874cbb'
        : ((percentage >= 10 && percentage < 15) ? '#a64444'
            : ((percentage >= 15 && percentage < 20) ? '#295397'
                : ((percentage >= 20 && percentage < 30) ? '#5bcf95'
                    : ((percentage >= 30 && percentage < 45) ? '#947fff'
                    : ((percentage >= 45 && percentage < 75) ? '#7fffa8'
                        : '#105633'))))))
                    }
`;

export const Label = styled.span`
  color: #ffffff;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 32px;
`;
