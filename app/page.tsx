import dynamic from "next/dynamic";

const ExtractForm = dynamic(() => import("./src/components/ExtractForm"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  return (
    <div>
      <ExtractForm />
    </div>
  );
}
