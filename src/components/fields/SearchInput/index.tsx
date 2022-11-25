import { Icon, Search, SInput } from "./styles";

interface ISearchInput {
  width: string
}

export function SearchInput({width}: ISearchInput) {
  
  return (
    <Search width={ width }>
      <SInput placeholder='buscar...' />
      <Icon />
    </Search>
  );
}
  
  export default SearchInput;