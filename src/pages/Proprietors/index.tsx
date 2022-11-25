import { Actions, Content, DeleteIcon, EditIcon, NullContent } from "./styles"
import SearchInput from "../../components/fields/SearchInput"
import Button from "../../components/actions/Button"
import { useTheme } from "styled-components"
import { Proprietor } from '../../types/Proprietor';
import Table from '../../components/data/Table';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Proprietors() {

  const [proprietor, setProprietors] = useState<Proprietor[]>([])

  useEffect(() => {
    api.get(`/v1/proprietors`, {headers: {'x-tenant-id': 'hovet'}})
      .then(function (response) { setProprietors(response.data)})
      .catch(error => {console.error("ERROR:", error)})
  }, [])

  const pages = [
    { href: "/proprietors", title: "Proprietários" },
    { href: "/proprietors/pets", title: "Pets" }
  ]
  const theme = useTheme()
  const titles = ['id','nome','CPF','email','phone','editar', 'excluir' ]

  // const titlesJSX = titles.map(title =>(
  //   <th key={title}>{title}</th>
  // ))
  
  const titlesJSX = [
    <th key="id">id</th>,
    <th key="nome">nome</th>,
    <th key="CPF">CPF</th>,
    <th key="email">email</th>,
    <th key="phone">phone</th>,
    <th key="editar">editar</th>,
    <th key="excluir">excluir</th>,
  ]


  const data = proprietor?.map(proprietor =>(
    <tr key={ proprietor.id }>
      <td data-label={ titles[0] }>{ proprietor.id }</td>
      <td data-label={ titles[1] }>{ proprietor.name }</td>
      <td data-label={ titles[2] }>{ proprietor.cpf }</td>
      <td data-label={ titles[3] }>{ proprietor.email }</td>
      <td data-label={ titles[4] }>{ proprietor.phone }</td>
      <td data-label={ titles[5] }  style={{textAlign: 'center'}}>
        <Link to="#"><EditIcon/></Link>
      </td>
      <td data-label={ titles[6] } style={{textAlign: 'center'}}>
        <Link to="#"><DeleteIcon/></Link>
      </td>
      {/* <td data-label={ titles[6] }><Icon href="#" type='delete'><BsTrash/></Icon></td> */}
    </tr>
  ))

  return (
    <>
      <Actions>
        <SearchInput width={theme.space[80]}/>
        <Link to="/dashboard">
          <Button as={"a"}>criar proprietários</Button>
        </Link>
      </Actions>
      <Content>
        {proprietor 
          ? <Table titles={ titlesJSX } data={ data}/>
          : <NullContent>Nenhum registro encontrado.</NullContent>
        }
      </Content>
    </>
  )
}
export default Proprietors