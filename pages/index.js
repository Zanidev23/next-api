import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/comments">
          <a>Lihat Komen</a>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
