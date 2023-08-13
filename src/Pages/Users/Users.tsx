import DataTable from "../../Components/DataTable/DataTable"
import Layout from "../../Layout"
import "./Users.scss"

const Users = () => {
  return (
    <Layout>
    <div className="Users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable/>
    </div>
    </Layout>
  )
}

export default Users