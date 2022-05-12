import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { getAllPosts } from "src/lib/blog";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
	const allPosts = getAllPosts(["slug", "title", "date"]);
	return {
		props: { allPosts },
	};
};

const Index: NextPage<Props> = ({ allPosts }) => {
	return (
		<>
			<Head>
				<title className="text-xl text-fgalt">ponte-vecchio</title>
				<meta
					name="description"
					content="ponte-vecchio's personal blog"
				/>
				{/* use colorwheel.ico */}
				<link rel="icon" href="/colorwheel.ico"></link>
				<img src="https://avatars.githubusercontent.com/u/64239070?v=4" alt="avatar" className="w-32 h-32 rounded-full" />
			</Head>

			<div className="mt-16">
				{allPosts.map((post) => (
					<div className="my-3" key={post.slug}>
						<a
							href={"blog/" + post.slug}
							key={post.slug}
							className="hover:underline text-green"
						>
							<h2 className="text-3xl pt-4 font-mono font-normal text-fgalt">
								{post.title}
								<p className="text-xl font-normal text-cyan">
									{post.date}
								</p>	
							</h2>
						</a>
					</div>
				))}
			</div>
		</>
	);
};

export default Index;
