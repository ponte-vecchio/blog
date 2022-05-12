import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html className="pr-11 pl-11 lg:mr-96 lg:ml-96">
				<Head></Head>
				<div className="min-h-screen">
					<header className="my-8">
						<a href="/">
							{/* italic 5xl */}
							<p className="flex text-2xl text-darkcyan">ponte-vecchio</p>
						</a>
					</header>
					<body className="bg-bg text-yellow">
						<Main />
						<NextScript />
					</body>
					<div className="my-40"></div>
				</div>
				<footer className="flex justify-center my-4 py-8 border-t border-blue">
					<div className="grid-rows-2">
						<div className="grid-span-1 flex justify-around">
							<div className="text-center">
								<a href="https://github.com/ponte-vecchio/">
									<i className="h-16 mx-1 fab fill-current text-fg text-3xl fa-github"></i>
								</a>
							</div>
							<div className="text-center">
								<a href="mailto:zkogdxdkur@p.monash.edu">
									<i className="h-16 mx-1 fab fill-current text-red text-3xl fa-google"></i>
								</a>
							</div>
							<div className="text-center">
								<a href="https://github.com/ponte-vecchio/">
									<i className="h-16 mx-1 fab fill-current text-darkgreen text-3xl fa-orcid"></i>
								</a>
							</div>
						</div>
						<div className="grid-span-1 justify-center">
							<p>
							{/* <i className="h-12 mx-1 fab fill-current text-fgalt text-xl fa-copyright"></i> */}
							2022 &copy; ponte-vecchio</p>
						</div>
					</div>
				</footer>
			</Html>
		);
	}
}

export default MyDocument;
