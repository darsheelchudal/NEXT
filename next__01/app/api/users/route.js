//localhost:3000/api/users
export async function GET(request) {
  const users = [
    { id: 1, name: "Darsheel" },
    { id: 2, name: "Dibya" },
    { id: 3, name: "Dikshya" },
  ];
  return new Response(JSON.stringify(users));
}
