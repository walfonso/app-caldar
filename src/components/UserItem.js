import React, { useEffect, useState } from "react";

export default function UserItem(props) {
  const { user } = props;
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        <button style={{ marginRight: 5 + "px" }}>Editar</button>
        <button>Borrar</button>
      </td>
    </tr>
  );
}
