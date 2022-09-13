interface Comment {
  username: string
  comment:  string
}


interface Album {
  id:       string
  title:    string
  username: string
  image:    string
  comments:  Comment[]
}
