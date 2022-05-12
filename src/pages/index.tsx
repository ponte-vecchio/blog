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
			<div className="flex flex-col items-left justify-left mt-16">
				{allPosts.map((post) => (
					<div className="my-3 mb-10" key={post.slug} style={{verticalAlign: 'top'}}>
						<a
							href={"posts/" + post.slug}
							key={post.slug}
							className="hover:underline text-green"
						>
							<div
								className="inline-block text-left text-3xl mr-10 font-mono font-normal text-cyan"
								style={{verticalAlign: 'top'}}
							>
								<p className="text-xl font-normal text-cyan">
									<sub style={{verticalAlign: 'top'}}>{post.date}</sub>
								</p>
							</div>
							<div
								className="inline-block text-right text-xl ml-10 mb-1 font-mono font-bold text-fgalt"
								style={{verticalAlign: 'top'}}
							>
								<p>
									{post.title}
								</p>		
							</div>
							<hr className="border-black border-1" />	
						</a>
					</div>
				))}
			</div>
		</>
	);
};

export default Index;
