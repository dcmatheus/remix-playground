import { useLoaderData, useNavigate } from "@remix-run/react";
import api from "~/services/api";
import { Album, Container, TextContainer, Title, Image, Username } from "./styles";

export async function loader() {
  const response = await api.get('0b498b01-c20f-49d9-8ab6-edda571b4d62');
  return response.data.albums;
}

export default function Home() {
  const albums = useLoaderData();
  const navigate = useNavigate();
  return (
    <Container>
      {albums.map((album: Album) => (
        <Album key={album.id} onClick={() => navigate('details', { state: { album } })}>
          <Image src={album.image} alt="Thumbnail" />
          <TextContainer>
            <Title>{album.title}</Title>
            <Username>{album.username}</Username>
          </TextContainer>
        </Album>
      ))
    }
    </Container>
  );
}
