"use client";

import { useState } from "react";
import Table from "react-bootstrap/Table";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData } from "../functions/deleteData";
export const TableData = ({ setShowTable }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data_elections")) || []
  );
  return (
    <>
      <section>
        <h4 className="text-center">Electoral data uploaded</h4>
        <div className="tableData">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Year</th>
                <th>Political party</th>
                <th>County</th>
                <th>Vote count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tableData__tbody">
              {data.map((res, i) => (
                <tr key={i}>
                  <td>{res.year}</td>
                  <td>{res.politicalParty}</td>
                  <td>{res.county}</td>
                  <td>{res.voteCount}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-secondary"
                      onClick={() => deleteData(i, data, setData)}
                    >
                      <RiDeleteBin5Fill size={25} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <button
          className="btn btn-primary d-block mt-3"
          onClick={() => setShowTable(false)}
        >
          Hide table
        </button>
      </section>
    </>
  );
};
