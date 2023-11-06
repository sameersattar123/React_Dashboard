import { GridColDef } from "@mui/x-data-grid"
import "./Add.scss"

type Props = {
    slugs : string;
    columns : GridColDef[];
    setOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props:Props) => {
  return (
    <div className='add'>
        <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
          <h1>Add new {props.slugs}</h1>
        </div>
    </div>
  )
}

export default Add