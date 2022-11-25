// import { Fallback } from "@radix-ui/react-avatar";
import { Root, Image, Fallback } from './styles';

 function Avatar() {
  return (
    <Root>
      <Image 
        src='https://github.com/FelipeGadelha.png' 
        alt='Felipe Gadelha'
      />
      <Fallback delayMs={600}>FG</Fallback>
    </Root>
  )
  
 };

export default Avatar