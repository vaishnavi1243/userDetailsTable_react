import { useState } from "react";
export default function (props) {
  const [name, setName] = useState("");
  console.log(name);

  let searchedName = props.userDetails.filter(
    (userDetails) =>
      userDetails.first_name.includes(name) ||
      userDetails.last_name.includes(name) ||
      userDetails.email.includes(name)
  );

  console.log(searchedName);
  return (
    <>
      <input
        className="search"
        placeholder="search for"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP address</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {searchedName.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.ip_address}</td>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
