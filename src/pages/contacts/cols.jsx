import { createColumnHelper } from '@tanstack/react-table';
import TableCell from '../../components/TableCell';
import EditCell from '../../components/EditCell';

const columnHelper = createColumnHelper();

const cols = [  
  // columnHelper.accessor("id", {
  //   header: "ID",
  //   cell: TableCell,
  //   meta: {
  //     type: "id",
  //   },
  // }),
  columnHelper.accessor("first_name", {
    header: "First Name",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("last_name", {
    header: "Last Name",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  // columnHelper.accessor("address_1", {
  //   header: "Address 1",
  //   cell: TableCell,
  //   meta: {
  //     type: "text",
  //   },
  // }),
  // columnHelper.accessor("address_2", {
  //   header: "Address 2",
  //   cell: TableCell,
  //   meta: {
  //     type: "text",
  //   },
  // }),
  columnHelper.accessor("address_3", {
    header: "Address 3",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("address_4", {
    header: "Address 4",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("eircode", {
    header: "Eircode",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("mobile", {
    header: "Mobile",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  // columnHelper.accessor("age", {
  //   header: "Age",
  //   cell: TableCell,
  //   meta: {
  //     type: "number",
  //   },
  // }),
  // columnHelper.accessor("Notes", {
  //   header: "Notes",
  //   cell: TableCell,
  //   meta: {
  //     type: "number",
  //   },
  // }),
  // columnHelper.accessor("password", {
  //   header: "Password",
  //   cell: TableCell,
  //   meta: {
  //     type: "text",
  //   },
  // }),
  // columnHelper.accessor("created_on", {
  //   header: "Created on",
  //   cell: TableCell,
  //   meta: {
  //     type: "text",
  //   },
  // }),
  // columnHelper.accessor("last_login", {
  //   header: "Last Login",
  //   cell: TableCell,
  //   meta: {
  //     type: "text",
  //   },
  // }),
  columnHelper.display({
		id: "edit",
		cell: EditCell,
	}),
];

export default cols;