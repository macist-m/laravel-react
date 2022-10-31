import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
  return (
    <>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              TAKERRRRRRRR
            </div>
            <div className="">
              <Link href="/logout" method="post" as="button" type="button">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
