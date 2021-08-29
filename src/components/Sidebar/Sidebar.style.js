import styled from "@emotion/styled";

export const SidebarContainer = styled.div`    
    position: relative;
    width: ${({isSidebarOpen})=>(isSidebarOpen? '20%' : '5%')};
    max-width: 280px;
    min-width: 80px;
    background-image: linear-gradient(
            315deg, 
            rgba(144, 213, 236, 0.8) 0%, 
            rgba(252, 87, 94, 0.8) 74%), 
    url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: white;
    transition: .2s ease-in-out;
    min-height: 600px;
`;
export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 10px;
    font-family: ${f=>f.font};
`;
export const MenuItemContainer = styled.div``;

export const ItemContainer = styled.div``;
export const MenuItem = styled.div`
    ${({isSidebarOpen, isSelected})=>!isSidebarOpen &&  `
            text-align: center;
            ${isSelected && `background-color: rgba(0,0,0,0.6);`}    
        `};
    padding: 6px 20px;
    font-weight: 600;
    white-space: nowrap;
    color: ${({isSelected})=>(isSelected ? '#fff' : 'rgba(19, 15, 64)')};
    font-family: ${f=>f.font};
    position: relative;
    transition: .2s all;
    &:after{
        content: '';
        border: 1px solid ${({isSelected})=>(isSelected ? '#fff' : 'rgba(255, 112, 85)')};
        display: block;
        margin: 8px 0 4px;
    }
    &:hover{
        color: rgba(255,255,255);
        cursor: pointer;
        transition: 0.4s ease-in-out;
    }
    ${({isSelected})=>(
        !isSelected && `&:hover{
            &:after{
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: .2s ease-in-out;
            }
        }`
    )}    
`;
export const Icon = styled.img`
    ${({isSidebarOpen}) => isSidebarOpen && `padding-right: 20px; transition: .2s ease-in padding-right: 0`} ;
    height: 16px;
    width: 16px;      
`;
export const Text = styled.p`    
    display: ${({isSidebarOpen})=>(isSidebarOpen? 'inline' : 'none')} ;    
`;
// ===========Handle Toggle Side bar=======================
export const ToggleContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;    
    min-height: 30px;
`;
export const Toggoler = styled.div`
    height: 40px;
    cursor: pointer;    
    position: relative;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        width: 100%;
        height: .1em;
        background: #fff;
        box-shadow: 0 .75em 0 0 #fff, 0 1.5em 0 0 #fff;
    }
`
// Show submenu
export const DropdownIcon = styled.span`
    position: absolute;
    top: 12px;
    right: 10px;
    border: solid ${({isSelected})=>(isSelected ? '#fff' : 'rgba(19, 15, 64)')};
    border-width: 0 3px 3px 0;
    padding: 3px;
    transform: ${({isOpen})=> (isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
    transition: .6s;
`;
export const SubmenuItem = styled.p`
    color: ${p=>p.selected ? '#fff' :  'rgba(19, 15, 64)'};
    ${p=>p.selected && 'font-weight: bold; letter-spacing: 2px;'};
    
    /* padding-left: 10%; */
    &:hover{
        color:rgba(255, 255, 255);
        cursor: pointer;
    }
`;
export const SubmenuItemContainer = styled.div`
    /* ${({isOpen})=>(!isOpen && 'display: none')}; */
    font-size: 0.9rem;
    line-height: 1.2rem;
    ${({isSidebarOpen})=>(isSidebarOpen && 'padding-left: 10%')} ;
    ${({isSidebarOpen})=>(!isSidebarOpen && 'text-align: center')} ;
`;
