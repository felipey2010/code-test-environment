import Head from 'next/head'
export default function SEO({ title, description, keywords }) {
  return (
    <Head>
      <title>{title + ' | DevEnv'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content={keywords ? keywords : 'test, programming, codes'}
      />
      <meta
        name="description"
        content={description ? description : 'Environment to test my codes'}
      />
    </Head>
  )
}
