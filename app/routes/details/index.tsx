import { useLocation } from "@remix-run/react";
import type { Location } from "history";
import { Album, Container, TextContainer, Title, Image, Username, CommentsContainer, Comment } from "./styles";

interface State extends Location {
  state: {
    album: Album;
  }
}


function Details () {
  const { state } = useLocation() as State;
  if(!state?.album) {
    return <>Teste</>
  }
  return (
    <Container>
      <Album>
        <Image src={state.album.image} alt="Thumbnail" />
        <TextContainer>
          <Title>{state.album.title}</Title>
          <Username>{state.album.username}</Username>
        </TextContainer>
        <CommentsContainer>
          <Title marginBottom={24}>Comentários</Title>
          {state.album.comments.map(({comment, username}) => (
            <div key={comment+username}>
              <Comment>{ comment }</Comment>
              <Username>{ username }</Username>
            </div>
          ))}
          
        </CommentsContainer>
      </Album>
    </Container>
  )
}

export default Details;
