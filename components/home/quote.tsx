import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initQuoteAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
    });
  };

  useEffect(() => {
    const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

    return quoteAnimationRef.kill;
  }, [quoteRef, targetSection]);

  const renderQuote = (): React.ReactNode => (
    <div className="tall:py-60 py-72 section-container">
  <h1 ref={quoteRef} className="font-medium text-3xl md:text-3xl">
    {/* I have a <span className="text-strong font-bold">strong</span> obsession
    for attention to detail. */}
    ✔ Highly skilled in data analysis, engineering, and visualization
    <br />
    <br />
    ✔ Thorough understanding of data structures and statistical algorithms
    <br />
    <br />
    ✔ Knowledge of machine learning and predictive modeling techniques
    <br />
    <br />
    ✔ Experienced in data cleaning, preprocessing, and database management
    <br />
    <br />✔ Proven track record of generating actionable insights from complex data sets
  </h1>
</div>

  );

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      {renderQuote()}
    </section>
  );
};

export default QuoteSection;
