import xfarm from '../assets/xfarmbg.jpg'

const Home = () => {
  const BackgroundCover = () => {
    return (
      <div className="background-cover">
        <img src={xfarm} alt="Background Image"/>
      </div>
    )
  }
  return (
    <div>
      <BackgroundCover/>
    </div>
  )
}

export default Home;
