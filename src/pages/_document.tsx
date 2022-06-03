import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html
				className="px-12 lg:mr-24 lg:ml-24 md:mr-16 md:ml-16 sm:mr-8 sm:ml-8"
			>
				<Head>
					<style>
						@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
						@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
						@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@200;600&display=swap');
					</style>
				</Head>
				<div>
					<header className="my-4 sticky fixed">
						<div className="flex grid-rows-1 align-items-center align-content-center justify-content-flex-start">
							<div className="w-25 grid-span-1 justify-content-center">
								<button
									className= "bg-bg rounded hover:text-yellow active:bg-red active:text-white">
									<a href="/">
										<img
											className="w-24 h-24 rounded-full text-center"
											src="https://avatars.githubusercontent.com/u/64239070?v=4" alt="avatar" />
									</a>
									<p className="font-ibm text-center">
										ponte-vecchio
									</p>
								</button>
							</div>
							{/* <div className="w-25 grid-span-1 justify-content-around">
								<p className="font-ibm font-bold flex text-2xl text-darkcyan">ponte-vecchio</p>
							</div> */}
							<div className="w-50"></div>
							<div className="grid-span justify-content-flex-end">
								<a href="/">
									<button className="font-ibm font-bold flex text-2xl text-darkcyan rounded hover:text-yellow active:text-red"> About </button>
								</a>
							</div>
						</div>
					</header>
					<body className="bg-bg text-fgalt font-ubuntu">
						<Main />
						<NextScript />
					</body>
					<div className="my-40"></div>
				</div>
				<footer className="flex justify-center my-4 py-8 border-t border-blue">
					<div className="grid-rows-1">
						<div className="grid-span-1 flex justify-around">
							<div className="text-center">
								<a href="https://github.com/ponte-vecchio/">
									<i className="iconclick h-16 mx-1 fab fill-current text-fg text-3xl fa-github"></i>
								</a>
							</div>
							<div className="text-center">
								<a href="mailto:zkogdxdkur@p.monash.edu">
									<i className="iconclick h-16 mx-1 fab fill-current text-fgalt text-3xl fa-google"></i>
								</a>
							</div>
							<div className="text-center">
								<a href="https://github.com/ponte-vecchio/">
									<i className="iconclick h-16 mx-1 fab fill-current text-fgalt2 text-3xl fa-orcid"></i>
								</a>
							</div>
						</div>
						<div className="grid-span-1 justify-center text-fgalt">
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
