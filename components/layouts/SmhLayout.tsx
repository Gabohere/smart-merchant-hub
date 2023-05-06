import Head from 'next/head';
import { FC } from 'react';
import { Navbar, SideMenu } from '../ui';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl: string;
}

export const SmhLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl}) => {
  return (
    <>
      <Head>

        <title>{ title }</title>
        <meta name='description' content={pageDescription} />
        

        {/* Social media meta tags */}
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {
          imageFullUrl && (
            <meta name='og:image' content={imageFullUrl} />
          )
        }

      </Head>
      <nav>
        <Navbar />
      </nav>
      
      <SideMenu />

      <main style={{
        margin: '80px auto',
        maxWidth: '1400px',
        padding: '0 30px',
      }}>
        { children}
      </main>
      <footer>
        {/** Footer */}
      </footer>
    </>
  )
}
