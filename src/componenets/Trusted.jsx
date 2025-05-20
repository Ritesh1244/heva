import React from "react";

const companyGroups = [
  [
    { name: "reddit", logo: "https://img.icons8.com/ios-filled/24/ffffff/reddit.png" },
    { name: "babylist", logo: "https://img.icons8.com/ios-filled/24/ffffff/like--v1.png" },
    { name: "loom", logo: "https://img.icons8.com/ios-filled/24/ffffff/sun--v1.png" },
    { name: "ramp", logo: "https://img.icons8.com/ios-filled/24/ffffff/feather.png" },
    { name: "avalara", logo: "https://img.icons8.com/ios-filled/24/ffffff/triangle--v1.png" },
  ],
  [
    { name: "notion", logo: "https://img.icons8.com/ios-filled/24/ffffff/notion.png" },
    { name: "clickup", logo: "https://img.icons8.com/ios-filled/24/ffffff/clickup.png" },
    { name: "alltrails", logo: "https://img.icons8.com/ios-filled/24/ffffff/mountain.png" },
    { name: "recursion", logo: "https://img.icons8.com/ios-filled/24/ffffff/hexagon.png" },
    { name: "chesapeake", logo: "https://img.icons8.com/ios-filled/24/ffffff/oil-energy.png" },
  ],
  [
    { name: "anthropic", logo: "https://img.icons8.com/ios-filled/24/ffffff/ai.png" },
    { name: "algolia", logo: "https://img.icons8.com/ios-filled/24/ffffff/algorithm.png" },
    { name: "modern treasury", logo: "https://img.icons8.com/ios-filled/24/ffffff/treasury.png" },
    { name: "sedgwick", logo: "https://img.icons8.com/ios-filled/24/ffffff/globe.png" },
    { name: "doximity", logo: "https://img.icons8.com/ios-filled/24/ffffff/doctor-male.png" },
  ],
  [
    { name: "hinge", logo: "https://img.icons8.com/ios-filled/24/ffffff/heart.png" },
    { name: "fivetran", logo: "https://img.icons8.com/ios-filled/24/ffffff/fivetran.png" },
    { name: "hightouch", logo: "https://img.icons8.com/ios-filled/24/ffffff/up-right-arrow.png" },
    { name: "appfolio", logo: "https://img.icons8.com/ios-filled/24/ffffff/app.png" },
    { name: "pure storage", logo: "https://img.icons8.com/ios-filled/24/ffffff/storage-device.png" },
  ],
];

export default function TrustedBy() {
  const renderCompanies = (companies) =>
    companies.map((c) => (
      <div
        key={c.name}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-opacity duration-200"
      >
        <img src={c.logo} alt={`${c.name} logo`} className="h-5 w-auto invert" />
        <span className="text-sm font-medium lowercase tracking-wide">{c.name}</span>
      </div>
    ));

  return (
    <>
      <div className="max-w-5xl mx-auto mt-20 mb-10 text-center">
        <h2 className="text-white/80 text-xl font-semibold tracking-wider">
          Trusted by <strong className="text-white">leading data teams</strong>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 px-4 text-left">
        {companyGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            {renderCompanies(group)}
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center text-white text-4xl font-extrabold leading-tight tracking-wider px-4">
        All your workflows,<br /> in one workspace
      </div>
    </>
  );
}
