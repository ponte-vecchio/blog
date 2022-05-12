import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "src/lib/blog";
import markdownToHTML from "src/lib/markdownToHTML";
import { useEffect } from "react";
import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
	const posts = getAllPosts(["slug"]);
	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: any) => {
	const post = getPostBySlug(params.slug, [
		"slug",
		"title",
		"date",
		"description",
		"content",
	]);
	const content = await markdownToHTML(post.content);
	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
};

const Post: NextPage<Props> = ({ post }) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	useEffect(() => {
		hljs.highlightAll();
	}, [hljs]);
	return (
		<>
			<Head>
				<title>{post.title + " | ponte-vecchio"}</title>
				<meta name="description" content={post.description} />
			</Head>
			<article>
				<h1 className="text-5xl text-center mt-20 mb-10 text-fgalt">{post.title}</h1>
				<div>
					<p
						className="text-1xl text-justify mb-10 text-fgalt"
					>
						{post.description}
					</p>
				</div>
				<div>
					<hr className="border-black border-1 mb-5" />
					<p className="text-left text-1xl mb-1"><sub>AUTHOR</sub></p>
					<p className="text-left text-xl mb-5 text-fg">ponte-vecchio</p>
					<p className="text-left text-1xl mt-10 mb-1"><sub>DATE</sub></p>
					<p className="text-left text-xl mb-10 text-fg">{post.date}</p>
					<hr className="border-black border-1 mb-5" />
				</div>
				
				
				<div
					className="text-fg text-lg max-w-none prose
					prose-h1:text-darkcyan
					prose-h2:text-cyan
					prose-h3:text-darkmagenta
					prose-h4:text-magenta
					prose-p:text-fg
					prose-a:text-darkgreen
					prose-a:no-underline
					prose-blockquote:text-fg
					prose-figure:text-blue
					prose-figcaption:text-blue
					prose-strong:text-fg font-weight-bold
					prose-em:text-fg font-weight-thin
					prose-code:text-red
					// prose-code:rounded 
					prose-code:bg-bg
					prose-code:before:text-zinc
					prose-code:after:text-zinc
					prose-pre:text-fg
					prose-pre:bg-bg
					prose-ol:text-red
					prose-ul:text-fg
					prose-li:text-yellow font-weight-thin
					prose-li:marker:text-yellow font-weight-thin
					prose-table:text-fg
					prose-thead:text-fg
					prose-tr:text-fg
					prose-th:text-fg
					prose-td:text-fg
					prose-img:text-fg
					prose-video:text-fg
					prose-hr:text-fg
					text-justify"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</article>
		</>
	);
};

export default Post;
