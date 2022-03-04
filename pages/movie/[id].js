import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

function Detail(props) {
    // const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(false);

    console.log(props);
    return (
        <Layout meta={
            <>
                <title>Booking Movie</title>
                <meta name="description" content="Booking movie" />
                <meta property="og:image" content={props.data?.poster} />
            </>
        }>
            <div>[id]</div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;

    const res = await fetch(`https://json-serve-hihi.herokuapp.com/api/v1/movies/${id}`);
    const data = await res.json();
    return {
        props: { data } // will be passed to the page component as props
    };
}


export default Detail;