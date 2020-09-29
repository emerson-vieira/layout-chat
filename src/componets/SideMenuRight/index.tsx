import React, { useRef } from "react";
import { RiInboxUnarchiveLine, RiBarChart2Line, RiMailSendFill, RiLineChartFill } from "react-icons/ri";

import { Container, Options } from "./styles";

/*
interface Props {
    subscribeMenuSelected(): React.Dispatch<React.SetStateAction<string>>;
}
*/
const SideMenu: React.FC = () => {

    const optionsRef = useRef<HTMLUListElement>(null);

    function handleClick(event: React.MouseEvent<HTMLLIElement>){
        if(event.currentTarget.classList.contains('active')) return;
       /* let setMenuActive = subscribeMenuSelected();
        setMenuActive(event.currentTarget.id);*/
        let liActive = optionsRef.current.querySelector('.active');
        liActive?.classList.remove('active');
        event.currentTarget.classList.add('active');
    }

    return (
        <Container>
            <Options ref={optionsRef}>
                <li className="active" onClick={handleClick} id='ChatList'>
                    <RiInboxUnarchiveLine />
                </li>
                <li onClick={handleClick} id='ContactsList'>
                    <RiBarChart2Line />
                </li>
                <li onClick={handleClick}>
                    <RiMailSendFill />
                </li >
                <li onClick={handleClick}>
                    <RiLineChartFill />
                </li >
            </Options>
        </Container>
    );
};

export default SideMenu;
