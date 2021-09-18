import React, { useState } from "react";
import ReactDOM from "react-dom";

// This has issue I can't see anything in run-code screen.
// I have to copy this code from my vscode.

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstname, setFirstname] = useState("Coder");
  const [lastname, setLastname] = useState("Byte");
  const [phone, setPhone] = useState("8885559999");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addEntryToPhoneBook(firstname, lastname, phone);
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ phoneBook }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {phoneBook.map((item, i) => (
          <tr key={i}>
            <td style={style.tableCell}>{item.firstname}</td>
            <td style={style.tableCell}>{item.lastname}</td>
            <td style={style.tableCell}>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [phoneBook, setPhoneBook] = useState([]);

  const addEntryToPhoneBook = (firstname, lastname, phone) => {
    const items = [
      ...phoneBook,
      {
        firstname,
        lastname,
        phone,
      },
    ];

    items.sort((a, b) =>
      a.lastname < b.lastname ? -1 : a.lastname > b.lastname ? 1 : 0
    );
    setPhoneBook(items);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBook={phoneBook} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
