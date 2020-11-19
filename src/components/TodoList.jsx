import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  PrinterOutlined,
  SearchOutlined,
  CheckOutlined,
  WarningOutlined 
} from "@ant-design/icons";
import { Button, Divider, Input, Modal, Popconfirm, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddUser from "./AddUser";

import DeleteTodo from "./DeleteTodo";

const UserTable = () => {
  const userData = useSelector((state) => state.userData);

  // console.log("userData", userData);

  const [createNewModalShow, setCreateNewModalShow] = useState(false);
  const [loadAgain, setLoadAgain] = useState(false);
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [SearchfilterString, setSearchfilterString] = useState("");

  useEffect(() => {
    setLoading(true);

    //  console.log("tempList", tempList);
    setData(userData);
    setGlobalData(userData);
    setLoading(false);

    return () => {
      setData([]);
    };
  }, [loadAgain]);

  const onAddUserClick = () => {
    setCreateNewModalShow(true);
  };

  const columns = [

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
    {
      title: "Length",
      dataIndex: "length",
      key: "length",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
         <span>{record}</span>
        ),
    }, 
    {
      title: "Width",
      dataIndex: "width",
      key: "width",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },

     {
      title: "Height",
      dataIndex: "height",
      key: "height",
      width: 200,
      minWidth: 200,
      render: (record) =>
        record === "" || record === null || record === undefined ? (
          "-"
        ) : (
          <span>{record}</span>
        ),
    },
  ];


  return (
    <div style={{ padding: 24, boxShadow:"3px 3px 5px 6px #ccc", marginTop:"5%" }}>
      {/**........static tabs */}
      <div className="log__header">
        <div class="ui top attached tabular menu">
        <h4>Yantraksh Logistics Pvt. Ltd.</h4>
</div>

      </div>
      {/**........LOGBOOK HEADER ENDS */}

      {/**...........STATS STARTS............. */}
      <div style={{ marginTop: "40px" }}>
        {/*<LogbookStats />*/}
      </div>

      <Divider />

      {/**...........STATS ENDS............. */}

      {/**..........................SEARCH STARTS..................................... */}
      <div class="ui grid"
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div class="two column row">
        <div class="column" style={{textAlign:'center'}}>
          <Button size="large" type="primary" onClick={onAddUserClick}>
            <PlusCircleOutlined /> Add Products
          </Button>
        </div>
      </div>
      </div>

      {/**..........................SEARCH ENDS..................................... */}
      <Divider />

      {/**........................TABLE STARTS............................. */}
      <div style={{ marginTop: "30px" }}>
        <Table
          className="theadDark"
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey={(k, i) => k.id}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 1300 }}
        />
      </div>

      {/**........................TABLE EMDS............................. */}

      {createNewModalShow === true ? (
        <Modal
          style={{ minWidth: "600px" }}
          title="Add New User"
          closable={true}
          footer={null}
          onCancel={() => setCreateNewModalShow(false)}
          visible={createNewModalShow}
          destroyOnClose={true}
        >
         <AddUser
            setLoadAgain={setLoadAgain}
            loadAgain={loadAgain}
            setCreateNewModalShow={setCreateNewModalShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default UserTable;