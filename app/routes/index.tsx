import { useLoaderData } from "@remix-run/react";
import api from "~/services/api";
import { Container } from "./styles";

export async function loader() {
  const response = await api.get('0b498b01-c20f-49d9-8ab6-edda571b4d62');
  return response.data.albums;
}

export default function Home() {
  const albums = useLoaderData();
  console.log(albums);
  return (
    <Container>Olá</Container>
  );
}
