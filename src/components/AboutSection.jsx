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
              Reiciendis minus neque sint dolo
            </p>

            {/* buttons here */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary bg-primary text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-primary hover:font-bold hover:shadow-[0_0_15px_rgba(40,209,224,0.9)]">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-white hover:font-bold hover:shadow-[0_0_15px_rgba(40,209,224,0.9)]"
              >
                Download Resume
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
                    Similique 
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
                    Similique tenetur voluptatem reprehenderit quas
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
