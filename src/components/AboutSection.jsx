import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        {/* ------- divide into 2 columns on large screens ------- */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ------- first column - about ------- */}

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

            {/* buttons here */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* second column - about text */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              {/* code */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Android Development</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique tenetur voluptatem reprehenderit quas est
                    repellendus nemo, placeat earum qui? Dignissimos libero
                    recusandae nulla repudiandae ipsa sint ipsam qui consequatur
                    mollitia.
                  </p>
                </div>
              </div>
            </div>

            {/* user */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Android Development</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique tenetur voluptatem reprehenderit quas est
                    repellendus nemo, placeat earum qui? Dignissimos libero
                    recusandae nulla repudiandae ipsa sint ipsam qui consequatur
                    mollitia.
                  </p>
                </div>
              </div>
            </div>

            {/* briefcase */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Android Development</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique tenetur voluptatem reprehenderit quas est
                    repellendus nemo, placeat earum qui? Dignissimos libero
                    recusandae nulla repudiandae ipsa sint ipsam qui consequatur
                    mollitia.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
