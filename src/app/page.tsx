import React from 'react';
import Head from 'next/head';
import "./globals.css";
import programmingLanguages from "@/app/data/programmingLanguages"; // Gunakan string literal untuk path
import Card from "@/app/components/Card";

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daftar Bahasa Pemrograman Terbaik di Dunia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Daftar Bahasa Pemrograman Terbaik di Dunia</h1>

        <div className={styles.grid}>
          {programmingLanguages.map((language, index) => ( // Menggunakan variabel yang benar
            <Card
              key={index}
              name={language.name}
              rank={language.rank}
              imageUrl={language.imageUrl}
              link={language.link}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        Website ini dibuat dengan penuh cinta oleh Adhitya Pratama M.P
      </footer>
    </div>
  );
}

export default Page;
