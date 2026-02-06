import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isWeekPage = location.pathname === "/week";

  /* 🔥 SCROLL TO SECTION (HOME PAGE) */
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <nav className="
        w-[94%] sm:w-[88%] lg:w-[80%]
        min-h-[40px] sm:min-h-[60px]
        bg-white/70 backdrop-blur-xl
        rounded-full shadow-2xl
        px-10 sm:px-14 md:px-20 lg:px-24
        flex items-center
        border border-white/60
      ">
        <div className="w-full flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer text-sm sm:text-base font-semibold text-rose-700"
          >
            Valentine
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-rose-600">
            <button onClick={() => navigate("/")}>Home</button>

            {!isWeekPage && (
              <>
                <button onClick={() => scrollToSection("story")}>
                  Story
                </button>
                <button onClick={() => scrollToSection("moments")}>
                  Moments
                </button>
              </>
            )}

            {!isWeekPage && (
              <button
                onClick={() => navigate("/week")}
                className="
                  px-6 py-2 rounded-full
                  bg-rose-600 text-white
                  shadow-md hover:bg-rose-700
                  transition
                "
              >
                Let’s enjoy this week
              </button>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-rose-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`
        md:hidden fixed top-[110px]
        w-[90%]
        bg-rose-100/80 backdrop-blur-lg
        rounded-3xl shadow-xl
        px-10 py-8
        transition-all duration-300
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}>
        <div className="flex flex-col gap-6 text-rose-600 text-center">
          <button onClick={() => navigate("/")}>Home</button>

          {!isWeekPage && (
            <>
              <button onClick={() => scrollToSection("story")}>
                Story
              </button>
              <button onClick={() => scrollToSection("moments")}>
                Moments
              </button>
            </>
          )}

          {!isWeekPage && (
            <button
              onClick={() => navigate("/week")}
              className="
                px-6 py-3 rounded-full
                bg-rose-600 text-white
              "
            >
              Let’s enjoy this week
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
