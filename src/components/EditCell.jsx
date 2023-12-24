import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaReply, FaPlusCircle, FaMinusCircle, FaEdit, FaTimesCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TfiNotepad } from "react-icons/tfi";

const EditCell = ({ row, table }) => {

  const navigate = useNavigate();
  const owner_id = row.original.owner_id
  const id = row.original.id

  const meta = table.options.meta

  // console.log('row', row)
  // console.log('table',table)    
  // console.log('meta', meta)


  switch (meta.purpose) {
    case 'notes': return (

      <div className="flex justify-evenly">
        <Link to={`/notes/${id}`} className="text-brandGreen"><TfiNotepad className="w-10 h-10" /></Link>
        <Link to={`/contact/${id}`} className="text-brandGreen"><CiEdit className="w-10 h-10" /></Link>
      </div>

    )

    case 'note': return <Link to={`/note/${id}`} className="text-blue-500 underline">Note </Link>;
    default: return 'rubbish';
  }

}

export default EditCell;