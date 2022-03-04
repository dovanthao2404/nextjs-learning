import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Link from 'next/link';

function Detail(props) {

    return (
        <Layout meta={
            <>
                <title>Booking Movie</title>
                <meta name="description" content={props.data?.name} />
                <meta content={`shibaalibaba${props.data.name}`} name="keywords" />
                <meta property="og:image" content={props.data?.poster} />
            </>
        }>
            <div>[id]</div>
            hihihihi
            <Link as={`/`} href="/">Home</Link>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.query;

    const res = await fetch(`https://json-serve-hihi.herokuapp.com/api/v1/movies/${id}`);
    let data = await res.json();
    return {
        props: { data } // will be passed to the page component as props
    };
}


export default Detail;