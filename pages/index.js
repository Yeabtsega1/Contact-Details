import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Image from 'next/image'

import links from "../data/links";
import logo from "../public/photo.jpg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Yeabtsega Behailu&apos;s Contact Details</title>
        <meta name="title" content="Yeabtsega Behailu's Contact Details" />
        <meta name="author" content="Yeabtsega Behailu" />
        <meta
          name="description"
          content="Yeabtsega Behailu's Contact Details"
        />
        <meta
          name="keywords"
          content="Yeabtsega Behailu, Yeabtsega Behailu's Contact Details, Yeabtsega Behailu's Linktree, Yeabtsega, Yeabtsega Behailu, Yeabtsega Behailu Github, Yeabtsega Behailu LinkedIn, Yeabtsega1, YB Shopping, T-r-a-d-e-i-t.netlify.app, YB-Shopping.netlify.app "
        />
        <link rel="canonical" href="https://Yeabtsega1.github.io/Contact Details" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Yeabtsega1.github.io/Contact Details" />
        <meta property="og:title" content="Yeabtsega Behailu" />
        <meta
          property="og:description"
          content="Yeabtsega Behailu's Contact Details"
        />
        <meta property="og:image" content="./website.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://Yeabtsega1.github.io/Contact Details" />
        <meta property="twitter:title" content="Yeabtsega Behailu" />
        <meta
          property="twitter:description"
          content="Yeabtsega Behailu's Contact Details"
        />
        <meta property="twitter:image" content="./website.png" />
      </Head>

      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
            <Link className="navbar-brand" href="/">
              Yeabtsega Behailu.
            </Link>
          </div>
          {/* <button className="btn navbar-btn">Hello</button> */}
        </div>
      </nav>

      <main className="mt-4">
        <div className="content container">
          <div className="row d-flex justify-content-center">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-6 my-3">
                  <div className="cards-wrap">
                    <Link href={item.url} rel="noreferrer" target="_blank">
                      <div className="cards p-3 d-flex justify-content-center">
                        <div className="cards-content">
                          <Image
                            src={item.img}
                            className="img-fluid cards-img"
                            alt=""
                          />
                          <h3 className="my-2 cards-name">{item.name}</h3>
                          <p className="text-muted cards-about">{item.about}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
