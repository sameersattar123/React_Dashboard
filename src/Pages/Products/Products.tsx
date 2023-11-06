import { GridColDef } from "@mui/x-data-grid"
import Add from "../../Components/Add/Add"
import DataTable from "../../Components/DataTable/DataTable"
import Layout from "../../Layout"
import { products } from "../../data"
import "./Products.scss"
import {useState} from "react"
import noavatar from "../../assets/noavatar.png"

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || noavatar} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


const Products = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
    <div className="Users">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {
        open &&
        <Add columns={columns} slugs="product" setOpen={setOpen}/>
      }
    </div>
    </Layout>
  )
}

export default Products