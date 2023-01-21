import React, { Component } from "react";

class AddBtn extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="text" id="myInput" placeholder=" enter here" />
        <button className="addBtn" onClick={this.AddEvent}>
          Add
        </button>
        <ul id="myUl">
          <table id="table">
            <tr id="row">
              <td id="data"></td>
            </tr>
          </table>
        </ul>
      </React.Fragment>
    );
  }

  AddEvent() {
    var myIn = document.getElementById("myInput").value;
    var t = document.createTextNode(myIn);
    var data = document.getElementById("data");
    data.appendChild(t);
    document.getElementById("myRow").appendChild(data);

    if (myIn === "") {
      alert("You must write something!");
    } else {
      var table = document.getElementById("table");
      document.getElementById("myUL").appendChild(table);
    }

    document.getElementById("myInput").value = "";

    console.log(myIn);
  }
}
export default AddBtn;
