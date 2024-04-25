export default function Slug({ slug }) {
  return (
    <main className={`fixed w-full h-full bg-black inset-0`}>
      <div className="absolute w-full h-full flex justify-center items-center ">
        <div className="pb-2 pt-2 pl-6 pr-6 border rounded-xl bg-slate-700 border-white hover:scale-125">
          Click me {slug}
        </div>
      </div>
    </main>
  );
}
