import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";

import { getAllPosts } from "../lib/api";

const casestudies = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <div className="bg-white px-1 py-5 space-y-5">
      {/* <div className="py-5 my-5">
        <div className="caseStudiesHeading">
          <h1>Our Case Studies</h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <Card {...CaseStudy1DataObject} />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <Card {...CaseStudy2DataObject} />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <Card {...CaseStudy3DataObject} />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <Card {...CaseStudy4DataObject} />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <Card {...CaseStudy5DataObject} />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <Card {...CaseStudy6DataObject} />
          </div>
        </div>
      </div> */}

      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </div>
  );
};

export default casestudies;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
