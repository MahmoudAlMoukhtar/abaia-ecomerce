import "./orderList.css";
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";

export default function OrederList() {
  const [data, setDataOrders] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseOrders = await api.fetchAllOrders();
        setDataOrders(responseOrders.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const res = await api.deleteOrderById(id);
    setDataOrders(data.filter(item => item.id !== res.data._id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {field: "_id", headerName: "ID", width: 160},
    {field: "idProduct", headerName: "idProduct", width: 160},
    {
      field: "Username",
      headerName: "Username Order",
      width: 200,
      renderCell: params => {
        return <div className="orderListItem">{params.row.Username}</div>;
      },
    },
    {
      field: "nameProduct",
      headerName: "Name Product",
      width: 200,
      renderCell: params => {
        return <div className="orderListItem">{params.row.nameProduct}</div>;
      },
    },
    {
      field: "price",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "size",
      headerName: "Size",
      width: 160,
      renderCell: params => {
        return <div className="orderListItem">{params.row.sizeProduct}</div>;
      },
    },
    {
      field: "length",
      headerName: "Length",
      width: 160,
      renderCell: params => {
        return <div className="orderListItem">{params.row.lengthProduct}</div>;
      },
    },
    {
      field: "design",
      headerName: "Design",
      width: 160,
      renderCell: params => {
        return <div className="orderListItem">{params.row.designProduct}</div>;
      },
    },

    {
      field: "city",
      headerName: "City",
      width: 160,
      renderCell: params => {
        return <div className="orderListItem">{params.row.address.city}</div>;
      },
    },
    {
      field: "country",
      headerName: "Country",
      width: 160,
      renderCell: params => {
        return (
          <div className="orderListItem">{params.row.address.country}</div>
        );
      },
    },
    {
      field: "line1",
      headerName: "line1",
      width: 160,
      renderCell: params => {
        return <div className="orderListItem">{params.row.address.line1}</div>;
      },
    },
    {
      field: "zip",
      headerName: "Zip",
      width: 160,
      renderCell: params => {
        return <div className="orderListItem">{params.row.address.zip}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        //console.log(params.row);
        return (
          <div className="containerActionsBtns">
            <Link to={"/order/" + params.row._id}>
              <button className="orderListEdit">Accept</button>
            </Link>
            <button
              className="orderListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
}
