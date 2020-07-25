import Head from 'next/head'
import Link from 'next/link' // With link se hace SPA: no refresca cada vez
import { Fragment } from 'react'
import AppLayout from '../components/appLayout'

export default function Home() {
	return (
		<Fragment>

			<Head>
				<title>Twitter Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout> {/* Para que me de estils globales */}
				<h1 className="">
					<a href="https://nextjs.org">Tclone</a>
				</h1>

				{/* Rutas: carpeta en pages y dentro index.js */}
				<nav>
					<Link href="/timeline"><a>timeline</a></Link>
				</nav>

			</AppLayout>

			

			{/* Only applies to THIS component */}
			<style jsx>{`
				h1 {
					text-align: center;
					font-size: 48px;
				}

				nav {
					font-size: 24px;
					text-align: center;
				}

				a {
					text-decoration: none;
				}

			`}</style>

			
		</Fragment>
  )
}
