import Props from "../../component/Props"

const Home = () => {
  return (
    <>
    <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
      <h1>Props</h1>
      <Props name="Khanzadi" cast="Memon" />
      <Props cast="Memon" />
    </div>
    </>
  );
}

export default Home;