import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../Components/DataTable/DataTable"
import Layout from "../../Layout"
import "./Users.scss"
import noavatar from "../../assets/noavatar.png"
import { userRows } from "../../data";
import {useState} from "react"
import Add from "../../Components/Add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'avatar', headerName: 'Avatar', width: 100,
  renderCell : (params) => {
    return <img src={params.row.img || noavatar} alt="" />
  }
},
{ field: 'status', headerName: 'Status', width: 100 , type : "boolean"},
{ field: 'actions', headerName: 'Actions', width: 100,
renderCell : () => {
  return <div className="action">
    <div className="view">Views</div>
    <div className="delete">Delete</div>
  </div>
}
},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const Users = () => {
  const [open, setOpen] = useState(false)
  

  return (
    <Layout>
    <div className="Users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {
        open &&
        <Add columns={columns} slugs="users" setOpen={setOpen}/>
      }
    </div>
    </Layout>
  )
}

export default Users