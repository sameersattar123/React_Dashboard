import "./DataTable.scss"
import { DataGrid, GridColDef, GridToolbar , GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

type Props = {
  columns : GridColDef[],
  rows : object[]
}


  
const DataTable = (props:Props) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      className="datagrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
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