import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import AddBoiler from "./Shared/Button/";

import Users from "../mocks/users.json";
import style from "./Users.module.css";

console.log(style);
export default function UserList() {
  return (
    <div className={style.mainContainer}>
      <div className={style.headerTitle}>
        <h2>Listado de Usuarios</h2>
      </div>
      <div className={style.right}>
        <AddBoiler color={"green"} text={"+ Agregar Usuario"} />
      </div>

      <table className={style.tableStyle}>
        <thead>
          <tr>
            <th> Id &#35; </th>
            <th> Nombre </th>
            <th> Apellidos</th>
            <th> Email</th>
            <th> Opciones </th>
          </tr>
        </thead>

        <tbody>
          {Users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
