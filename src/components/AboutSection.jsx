export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      {" "}
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        {/* divide into 2 columns on large screens */}
        <div grid grid-cols-1 md:grid-cols-2 gap-12 items-center>
          {/* first column - download btns */}
          <div className="space-y-6">
            <h3>Android Developer</h3>  
          </div>

          {/* second column - about text */}
          <div>

          </div>

        </div>
      </div>
    </section>
  );
};