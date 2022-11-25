import { useState } from "react";
// import * as TbIcons from "react-icons/tb";
import { NavLink } from "../../navigation/NavLink";
import Flex from "../../structure/Flex";
import { Container, Content } from "./styles";
import { FaUserMd } from 'react-icons/fa';
import { AiTwotoneExperiment, AiOutlineDollar } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GiBed } from 'react-icons/gi';
import {
  RiDashboardFill, 
  RiCalendarTodoFill, 
  RiGroupFill,
  RiGitRepositoryFill,
  RiShoppingCart2Fill,
  RiUserAddFill
} from "react-icons/ri";

interface SidebarProps {
  visible: boolean, 
  close: () => void
}

export function Sidebar({visible, close}: SidebarProps) {
  const [compact, setCompact] = useState(0);
  return (
    <Container compact={visible}>
      <Content>
        <Flex>
          d
        </Flex>
        <NavLink icon={ RiDashboardFill } children="Dashboard" href="/dashboard" />
        <NavLink icon={ RiCalendarTodoFill } children="Consultas" href="/appointments" />
        <NavLink icon={ RiGroupFill } children="Proprietários" href="/proprietors" />
        <NavLink icon={ FaUserMd } children="Veterinários" href="#" />
        <NavLink icon={ RiGitRepositoryFill } children="Registros" href="/registers" />
        <NavLink icon={ GiBed } children="Internação" href="#" />
        <NavLink icon={ AiTwotoneExperiment } children="Exames" href="#" />
        <NavLink icon={ RiShoppingCart2Fill } children="Produtos" href="#" />
        <NavLink icon={ AiOutlineDollar } children="Financeiro" href="#" />
        <NavLink icon={ HiOutlineDocumentReport } children="Relatórios" href="#" />
        <NavLink icon={ RiUserAddFill } children="Usuários" href="#"/>
      </Content>
    </Container>
  );
}

export default Sidebar;