import { ReactNode, useState, useLayoutEffect } from "react";
import { useBreakpointValue } from "../../hook/useBreakpointValue";
import Header from "../surface/Header";
import Sidebar from "../surface/Sidebar";
import { Grid } from "./styles";

interface LayoutProps {
  children: ReactNode,
}
{/* <MdIcons.MdOutlinePets /> */}
{/* <AiIcons.AiFillExperiment /> */}
export function Layout({ children }: LayoutProps) {
  
  const [showNav, setShowNav] = useState(false);
  const [compact, setCompact] = useState(false);

  const isWideVersion = useBreakpointValue("tablet")
  const isFullWideVersion = useBreakpointValue("laptop")
  
  const toggle = () => {
    setShowNav(!showNav)
    setCompact(!compact)
  }
  return (
    <Grid>
      <Sidebar visible={compact} close={toggle} />
      <Header toggle={toggle}/>
      { children }
    </Grid>
  );
}

export default Layout;