import "./DataTable.scss"
import { DataGrid, GridColDef, GridToolbar , GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

type Props = {
  columns : GridColDef[],
  rows : object[],
  slug: string
}


  
const DataTable = (props:Props) => {

    const actionColumn:GridColDef = {
      field:"action",
      headerName : "Action",
      width:20,
      renderCell:(params)=> {
        return(
          <div className="action">
            <Link to="">
            <img src="/view.svg" alt="" />
            </Link>
            <Link className="delete" to="">
            <img src="/delete.svg" alt="" />
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
        columns={props.columns}
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