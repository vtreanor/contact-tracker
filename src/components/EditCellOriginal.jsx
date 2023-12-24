import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditCell = ({ row, table }) => {

    const navigate = useNavigate();
    const owner_id = row.original.owner_id
    const id = row.original.id



    // console.log('row', row)
    // console.log('table',table)

    const meta = table.options.meta
    console.log('meta', meta)
    const thingy = meta.fred.second

    const setEditedRows = (e) => {
        const elName = e.currentTarget.name
        meta?.setEditedRows((old) => ({
            ...old,
            [row.id]: !old[row.id],
        }))
        if (elName !== "edit") {
            meta?.revertData(row.index, e.currentTarget.name === "cancel")
        }
    }

    const divert = (e) => {
        <Link to={`/contact/${owner_id}`} className='text-blue-800 underline font-bold' ></Link>
    }

    // return thingy === 3 ? 'blue' : 'red'
    switch (meta.purpose){
        case 'notes' : return 'Notes';
        default : return 'rubbish';
    } 

    return meta?.editedRows[row.id] ? (
        <>
            <button onClick={setEditedRows} name="cancel">
                X
            </button>{" "}
            <button onClick={setEditedRows} name="done">
                ✔
            </button>
        </>
    ) : (
        <button name="edit">
            <Link to={`/note/${id}`}>
                ✐
            </Link>
        </button>
    )
}

export default EditCell;