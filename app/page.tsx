import dynamic from "next/dynamic";

const ExtractForm = dynamic(() => import("./src/components/ExtractForm"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <ExtractForm />
    </div>
  );
}

// "use client";
// import ExtractForm from "./src/components/ExtractForm";

// export default function page() {
//   return (
//     <div>
//       <ExtractForm />
//     </div>
//   );
// }
