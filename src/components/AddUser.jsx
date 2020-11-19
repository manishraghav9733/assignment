import { Button, DatePicker, Input, message, Select } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions";

const { TextArea } = Input;
const { Option } = Select;

const AddUser = ({
dispatch,
setCreateNewModalShow,
setLoadAgain,
loadAgain,
}) => {
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [length, setLength] = useState("");
const [width, setWidth] = useState("");
const [height, setHeight] = useState("");

const onNameChange = (event) => {
setName(event.target.value);
};

const onDescriptionChange = (event) => {
setDescription(event.target.value);
};

const onPriceChange = (event) => {
setPrice(event.target.value);
};

const onLengthChange = (event) => {
setLength(event.target.value);
};

const onHeightChange = (event) => {
setHeight(event.target.value);
};

const onWidthChange = (event) => {
setWidth(event.target.value);
};

const createNew = () => {
if (
name === "" ||
name === " " ||
name === undefined ||
name === null
) {
setName(null);
message.warning("Please Enter Name");
return;
}
if (
description === "" ||
description === " " ||
description=== undefined ||
description=== null
) {
setDescription(null);
message.warning("Please Enter description");
return;
}

if (
price === "" ||
price === " " ||
price === undefined ||
price === null
) {
setPrice(null);
message.warning("Please Enter price");
return;
}

if (
length === "" ||
length === " " ||
length === undefined ||
length === null
) {
setLength(null);
message.warning("Please Enter length");
return;
}

if (
width === "" ||
width === " " ||
width === undefined ||
width === null
) {
setWidth(null);
message.warning("Please enter width");
return;
}

if (
height === "" ||
height === " " ||
height === undefined ||
height === null
) {
setHeight(null);
message.warning("Please Select height");
return;
}

dispatch(
addUser(
        name,
        description,
        price,
        length ,
        width,
        height
)
);
message.success("Details Added Succesfully");
setCreateNewModalShow(false);
setLoadAgain(!loadAgain);
};

return (
<div>
<div style={{ display: "flex", marginBottom: "25px" }}>
<div style={{ width: "140px",fontWeight: 600,}}>
<p>Name <span style={{ color: "red", paddingLeft: "4px" }}>*</span></p>
</div>
<div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
<div>
<Input type="text" placeholder="Full Name" style={ name === null ? { width: "100%", border: "0.5px solid red",} : {width: "100%",}} onChange={onNameChange} />
</div>
{name === null ? ( <div style={{ color: "red", marginTop: "5px" }}>* Required 
	</div>) : null}
</div>
</div>


<div style={{ display: "flex", marginBottom: "25px" }}>
<div style={{ width: "140px",fontWeight: 600,}}>
<p>Description <span style={{ color: "red", paddingLeft: "4px" }}>*</span></p>
</div>
<div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
<div>
<Input type="text" placeholder="Description" style={ description === null ? { width: "100%", border: "0.5px solid red",} : {width: "100%",}} onChange={onDescriptionChange} />
</div>
{description === null ? ( <div style={{ color: "red", marginTop: "5px" }}>* Required 
	</div>) : null}
</div>
</div>

<div style={{ display: "flex", marginBottom: "25px" }}>
<div style={{ width: "140px",fontWeight: 600,}}>
<p>Price <span style={{ color: "red", paddingLeft: "4px" }}>*</span></p>
</div>
<div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
<div>
<Input type="number" placeholder="Price" style={ price === null ? { width: "100%", border: "0.5px solid red",} : {width: "100%",}} onChange={onPriceChange} />
</div>
{price === null ? ( <div style={{ color: "red", marginTop: "5px" }}>* Required 
	</div>) : null}
</div>
</div>


<div style={{ display: "flex", marginBottom: "25px" }}>
<div style={{width: "140px",fontWeight: 600,}}>
<p>Length<span style={{ color: "red", paddingLeft: "4px" }}>*</span></p>
</div>
<div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
<div>
<Input type="text" placeholder="Length" style={length === null ? { width: "100%",border: "0.5px solid red",} : {width: "100%",}} onChange={onLengthChange} />
</div>
{length === null ? (
<div style={{ color: "red", marginTop: "5px" }}>* Required</div>
) : null}
</div>
</div>

<div style={{ display: "flex", marginBottom: "25px" }}>
<div style={{width: "140px",fontWeight: 600,}}>
<p>Width<span style={{ color: "red", paddingLeft: "4px" }}>*</span></p>
</div>
<div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
<div>
<Input type="text" placeholder="Width" style={width === null ? { width: "100%",border: "0.5px solid red",} : {width: "100%",}} onChange={onWidthChange} />
</div>
{width === null ? (
<div style={{ color: "red", marginTop: "5px" }}>* Required</div>
) : null}
</div>
</div>

<div style={{ display: "flex", marginBottom: "25px" }}>
<div style={{width: "140px",fontWeight: 600,}}>
<p>Height<span style={{ color: "red", paddingLeft: "4px" }}>*</span></p>
</div>
<div style={{ width: "calc(100% - 160px)", marginLeft: "20px" }}>
<div>
<Input type="text" placeholder="Height" style={width === null ? { height: "100%",border: "0.5px solid red",} : {width: "100%",}} onChange={onHeightChange} />
</div>
{height === null ? (
<div style={{ color: "red", marginTop: "5px" }}>* Required</div>
) : null}
</div>
</div>




<div style={{ margin: "60px 0px 30px 0px", textAlign: "center" }}>
<Button type="primary" onClick={() => createNew()}>
Add New
</Button>
</div>
</div>
);
};

export default connect()(AddUser);