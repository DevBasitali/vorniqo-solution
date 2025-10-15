import React from 'react';

export default function about() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-prose text-center">
            {/* 
              CHANGE 2: Changed text colors to be visible on a dark background.
              Applied your custom heading font utility class.
            */}
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Understand user flow and
              {/* CHANGE 3: Used your theme's primary color */}
              <strong className="text-primary"> increase </strong>
              CALL
            </h1>

            {/* CHANGE 4: Used your theme's lighter text color */}
            <p className="mt-4 text-base text-pretty text-text-dark sm:text-lg/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              {/* These buttons can be replaced with your PrimaryButton/OutlineButton components later */}
              <a
                className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-black shadow-sm transition-colors hover:bg-primary/80"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-primary/50 px-5 py-3 font-medium text-text-light shadow-sm transition-colors hover:bg-primary/10"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
