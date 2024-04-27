export default function OfficerProfile({
  officer: { name, specialization, age, status },
}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age} </p>
      <p>Status: {status === "Active" ? "Is Active" : "Is Retired"}</p>
      <p>Specialization: {specialization}</p>
    </div>
  );
}
