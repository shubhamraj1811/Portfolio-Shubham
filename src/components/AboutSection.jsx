export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        {/* divide into 2 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* first column - download btns */} 

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Android Developer
            </h3>

            <p className="text-muted-foreground ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              repudiandae corporis vitae vero, error ducimus?
            </p>

            <p className="text-muted-foreground ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis minus neque sint dolorem quam temporibus praesentium
              officia eveniet possimus fugiat?
            </p>
          </div>

          {/* second column - about text */}
          <div></div>
        </div>
      </div>
    </section>
  );
};
