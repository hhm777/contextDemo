const Home =function (props){
  const {history} = props;
  console.log(history)
  return (
    <div>Home <br/>
      <button onClick={() => history?.push("/sum/123")}>go children</button>
    </div>
  )
}
export default Home;
