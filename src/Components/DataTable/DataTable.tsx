import "./DataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import view from "../../assets/view.svg"
import Delete from "../../assets/delete.svg"

type Props = {
  columns : GridColDef[],
  rows : object[],
  slug: string
}


  
const DataTable = (props:Props) => {

  const handleDelete = (id:number) => {
    console.log(id+" has been deleted")
  }

    const actionColumn:GridColDef = {
      field:"action",
      headerName : "Action",
      width:20,
      renderCell:(params)=> {
        return(
          <div className="action">
            <Link to={`/${props.slug}/${params.row.id}`}>
            <img src={view} alt="" />
            </Link>
            <Link className="delete" to="" onClick={() => handleDelete(params.row.id)}>
            <img src={Delete} alt="" />
            </Link>
          </div>
        )
      }
    }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      className="datagrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  )
}

export default DataTable