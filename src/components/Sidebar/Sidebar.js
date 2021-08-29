import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from "framer-motion"
import {SidebarContainer, ItemContainer,
    SidebarHeader, MenuItemContainer, MenuItem, 
    SubmenuItemContainer, SubmenuItem,  Icon, Text,
    ToggleContainer, Toggoler, DropdownIcon
} from './Sidebar.style'
import { Link } from 'react-router-dom'
const Sidebar = props => {        
    const {
        backgroundImage = '', 
        sidebarHeader ={fullName: '', shortName: ''}, 
        menuItems=[],
        fonts={header:'',menu: ''} 
    } = props
    // State
    const [selected, setSelectdMenuItem] = useState(menuItems[0].name)
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);
    const [showSubmenu, setShowSubmenu] = useState({});    
    //set status submenu
    useEffect(()=>{
        let newSubmenus = {};
        menuItems.forEach((e, i) => {
            if(!!e.subMenu.length){                                
                newSubmenus[i] = {isOpen: false, isSelected: null}
            }
        });
        setShowSubmenu(newSubmenus);
    }, [menuItems]);    

    //Update header 
    useEffect(()=>{        
        isSidebarOpen? setTimeout(()=>setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName)
    },[isSidebarOpen, sidebarHeader]);
    useEffect(()=>{
        const updateWindowWidth = ()=>{
            if(window.innerWidth < 760 && isSidebarOpen){
                setSidebarOpen(false);
            }else{
                setSidebarOpen(true);
            }
        }
        window.addEventListener('resize', updateWindowWidth)
        return ()=> window.removeEventListener('resize', updateWindowWidth)
    },[]);

    //function 
    const handleMenuItemClick = (name, index)=>{
        setSelectdMenuItem(name);
        const _new = {...showSubmenu};
        for(let item in showSubmenu){                        
            _new[item].isOpen = false;
            _new[item].isSelected = null;
        }
        setShowSubmenu(_new);     
        if(showSubmenu.hasOwnProperty(index)){
            const _new = {...showSubmenu};
            _new[index].isOpen = !showSubmenu[index].isOpen;            
            setShowSubmenu(_new);
        }
        
    }
    const handleSubmenuItemClick = (menuItem, menuSubItem)=>{
        if(showSubmenu.hasOwnProperty(menuItem)){
            const _new = {...showSubmenu};
            _new[menuItem].isSelected = menuSubItem;
            setShowSubmenu(_new);
        }                
    }
    const menuItemJsx = menuItems.map((item, index)=>{
        const isSelected = selected === item.name;    
        const hasSubmenu = !!item.subMenu.length;
        const isSubmenuOpen = showSubmenu[index]?.isOpen;
        const menuSubSelected = showSubmenu[index]?.isSelected;
        const submenuJsx = item.subMenu.map((subItem, subIndex)=>{
            return ( 
                <Link style={{textDecoration: 'none'}} key={subIndex} to={`${item.to}${subItem.to}`}>
                    <SubmenuItem 
                        onClick={()=>handleSubmenuItemClick(index,subIndex)} 
                        key={subIndex}
                        selected={menuSubSelected === subIndex ? true : false}
                    >                    
                        {subItem.name}
                    </SubmenuItem>
                </Link>
                )
        });
        return (
            <ItemContainer key={index}>
                <Link to={item.to} style={{textDecoration: 'none'}}>
                    <MenuItem 
                        font={fonts.menu}                     
                        isSelected={isSelected}
                        onClick={()=>handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                    >
                        <Icon isSidebarOpen={isSidebarOpen} src={item.icon}></Icon>
                        <Text isSidebarOpen={isSidebarOpen}>{item.name}</Text>
                        {(hasSubmenu) && (<DropdownIcon isSelected={isSelected} isOpen={isSubmenuOpen} />)}
                    </MenuItem>
                </Link>
                <AnimatePresence>
                {
                    hasSubmenu && isSubmenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            exit={{ opacity: 0, y: -15 }}
                        >
                            <SubmenuItemContainer
                                isSidebarOpen={isSidebarOpen}
                            >{submenuJsx}
                            </SubmenuItemContainer>
                        </motion.nav>)
                }
                </AnimatePresence>


            </ItemContainer>
        )
    });
    

    return (        
        <SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen} >        
            <SidebarHeader font={fonts.header}>{header}</SidebarHeader>
            <MenuItemContainer>
                {menuItemJsx}
            </MenuItemContainer>
            <ToggleContainer onClick={()=>{setSidebarOpen(!isSidebarOpen)}}>
                <Toggoler />
            </ToggleContainer>            
        </SidebarContainer>
    )
}

export default Sidebar
