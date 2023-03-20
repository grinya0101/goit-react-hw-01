import styled from '@emotion/styled';



export const Swit = styled.span`
width: 20px;
height: 20px;
background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')}
}}
`;
