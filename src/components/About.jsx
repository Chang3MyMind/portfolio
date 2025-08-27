function About() {
  return (
    <>
      <section id="about" className="sections-container">
        <div className="section-content">
          <h2 className="section-title">About</h2>
          <div className="grid grid-cols-1 grid-rows-2 p-5 pt-0 md:col-span-full md:gap-0 md:grid-cols-2 md:grid-rows-1 xl:gap-5 row">
            <div className="mx-auto h-full w-full max-h-[217px] max-w-[154px] md:max-h-[317px] md:max-w-[254px] lg:max-w-[354px] lg:max-h-[417px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueiYz5f-OG_lGc6rFTBRNItyQpmLsug8zlA&s"
                alt="A random Image"
                className="h-full w-full"
              />
            </div>
            <div className="my-auto">
              <h3 className="color-text text-justify text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                Hello! I’m Matheus Mattos, a Front-End Developer passionate
                about crafting responsive and accessible interfaces. I
                specialize in HTML5, CSS3, and modern JavaScript ES6+. I'm
                currently focused on building my portfolio to showcase my work
                and further develop my skills with clean and scalable code.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
