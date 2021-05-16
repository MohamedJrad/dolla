import styled from 'styled-components'

export const Container =
    styled.aside<{isOpen:boolean}>`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    padding-top:60px;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen?'100%':'0')};
    top:${({isOpen})=>(isOpen?'0':'-120%')};

    
    
    
    `
    export const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
align-items:center;
padding-top :50px;
padding-bottom:50px;
/* background-color:blue; */

    `
export const  Icon =styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none
`