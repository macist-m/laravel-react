import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Loader } from "@mantine/core";
import route from "ziggy-js";

import DataTable from "react-data-table-component";
import { useMantineTheme } from "@mantine/core";
import "@/utils/datatable/theme";
import Header from "./Header";

const index = ({
  title,
  path,
  options,
  search,
  columns,
  data,
  total,
  perPage,
}) => {
  const [params, setParams] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchField, setSearchField] = useState(search.fields[0].value);
  const theme = useMantineTheme();

  useEffect(() => {
    params && fetchData();
  }, [params]);

  const fetchData = () => {
    setLoading(true);

    Inertia.get(route(path), params, {
      preserveState: true,
      only: options.only,
      onSuccess: () => {
        setLoading(false);
      },
    });
  };

  const handlePageChange = (page) => {
    setParams((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const handleSort = (column, sortDirection) => {
    const sortDir = sortDirection === "asc" ? "-" : "";

    setParams((prevState) => ({
      ...prevState,
      sort: sortDir + column.sortField,
    }));
  };

  const handleFilter = (words) => {
    const filter = "filter" + "[" + searchField + "]";
    console.log("inner", searchField, searchVal);

    setParams((prevState) => ({
      ...prevState,
      [filter]: words,
      page: 1,
    }));
  };

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <Header
        title={title}
        search={search}
        searchField={searchField}
        searchVal={searchVal}
        onSearchFieldChange={(val) => {
          setSearchVal("");
          setParams(null);
          setSearchField(val);
        }}
        onSearchValChange={(val) => {
          setSearchVal(val);
          handleFilter(val);
        }}
      />
    );
  }, [searchField, searchVal]);

  return (
    <div className="table-plain">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationServer
        paginationTotalRows={total}
        paginationPerPage={perPage}
        onChangePage={handlePageChange}
        onSort={handleSort}
        sortServer
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        paginationComponentOptions={{
          rangeSeparatorText: " / ",
        }}
        noDataComponent="Kayıt bulunmuyor..."
        progressComponent={<Loader size="sm" />}
        theme={theme.colorScheme}
        responsive
      />
      {loading && (
        <div className="table-loader">
          <Loader size="md" />
        </div>
      )}
    </div>
  );
};

export default index;
