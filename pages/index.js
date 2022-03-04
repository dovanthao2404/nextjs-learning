import Head from 'next/head';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Layout from '../components/layout';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';
import styles from '../styles/Home.module.css';
function Home(props) {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.counter);


  const { cineplex } = props;
  return (
    <Layout meta={
      <>
        <title>Booking Movie</title>
        <meta name="description" content="Booking movie" />
        <meta property="og:image" content={props.cineplex[0].logo} />
      </>
    }>
      <div style={{ display: "flex", "flexWrap": "wrap" }}>

        {cineplex && cineplex.map((item, key) => {
          return <Link key={key} as={`/movie/${item.id}`} href="/movie/[id]">
            <div style={{
              width: "25%",
              padding: 40,
              cursor: "pointer"
            }} >
              <p>{
                item.name
              }</p>
              <img style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} src={item.poster || "/assets/images/broken-1.png"} alt={item.name} />
            </div>
          </Link>;
        })}

      </div>
    </Layout >
  );
}

export async function getStaticProps() {
  const res = await fetch('http://json-serve-hihi.herokuapp.com/api/v1/movies/');
  const cineplex = await res.json();
  return {
    props: {
      cineplex,
    },
  };
}


export default Home;