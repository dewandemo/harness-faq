import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Find answers to your questions about Harness">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        textAlign: 'center'
      }}>
        <Heading as="h1">{siteConfig.title}</Heading>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>
          Find answers quickly.
        </p>
        <input 
          type="text" 
          placeholder="Search FAQs..." 
          style={{
            width: '50%', 
            padding: '15px', 
            fontSize: '18px', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            marginTop: '20px'
          }} 
        />
      </main>
    </Layout>
  );
}