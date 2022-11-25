import { useTheme } from "styled-components";
import useWindowDimensions from "./useWindowDimensions";

export function useBreakpointValue(
  media : "mobile-s" | "mobile-m" | "mobile-l" | "tablet" | 
          "laptop" | "laptop-l" | "desktop"
  ) {
  const theme = useTheme()
  const { width } = useWindowDimensions()
  console.log(theme)
  const bp = theme.media[media].replace('px', '')
  if(width && Number(bp) >= width) {
    return false
  }
  return true
}