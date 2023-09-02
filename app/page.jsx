import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore esse facilis ab, quaerat numquam ut magni quas harum perferendis ratione, impedit rem, laboriosam eaque.</p>
        <Feed />
    </section>
  )
}

export default Home
