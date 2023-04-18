import styled from "styled-components";
import px2vw from "../utils/px2vw";


export const Image = styled.img`
    width: 100%;

`


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:0 ${px2vw(30)} ${px2vw(30) };
    padding-top: 90px;
    max-width: 100%;
   
   
    @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`