import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";
class AdvisorList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.val = "";
    //console.log('old data', makeData());
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    console.log('yy',this.props.entries);
    return (
      <div>
        <ReactTable
          data={this.props.entries.items}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "Advisor",
              id: "name",
              accessor: d => d.name
            },
            {
              Header: "No of Reviews",
              id: "reviews",
              accessor: d => d.reviews,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["reviews"] }),
              filterAll: true
            },
            {
              Header: "Language",
              id: "language",
              accessor: d => d.language,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["language"] }),
              filterAll: true
            },
            {
                  Header: "Status",
                  accessor: "status",
                  id: "status",
                  Cell: ({ value }) => (value === true ? "online" : "offline"),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] = true;
                    } else 
                    return row[filter.id] = "false";
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="true">Online</option>
                      <option value="false">Offline</option>
                    </select>
                }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default AdvisorList;
