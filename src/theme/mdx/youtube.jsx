const YouTube = ({id}) => (
  <iframe
    title="YouTube video"
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    allowFullScreen
    className="youtube"
  />
)

export default YouTube
