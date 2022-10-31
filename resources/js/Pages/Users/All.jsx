import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Default from "@/Layouts/Default";
import Table from "@/Components/tables";
import { formatDate } from "@/utils/helpers";

const columns = [
  {
    name: "#",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    sortField: "name",
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
    sortField: "email",
  },
  {
    name: "Created @",
    selector: (row) => formatDate(row.created_at),
    sortable: true,
    sortField: "created_at",
  },
];

export default function All(props) {
  return (
    <Default>
      <Head title="Dashboard" />
      <div className="">
        <Table
          title="Kullanıcılar"
          path="users.all"
          options={{ only: ["users"] }}
          search={{
            fields: [
              { value: "name", label: "Ad" },
              { value: "email", label: "e-Posta" },
            ],
          }}
          columns={columns}
          data={props.users.data}
          total={props.users.total}
          perPage={props.users.per_page}
        />
      </div>
    </Default>
  );
}
