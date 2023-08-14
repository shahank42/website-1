export default function HomeContact() {
  return (
    <section className=" bg-zinc-50 min-w-full flex flex-col p-6 md:p-8 lg:p-24 h-[calc(100vh-12px)]">
      <h2 className="text-[2rem] lg:text-[3rem] font-black mb-4 leading-none">
        Contact Us
      </h2>
      <p className="text-lg">
        Have questions or want to get in touch with the Alumni Association? We
        are here to help!
      </p>
      <p className="text-lg">Reach out to us through the following means:</p>
      <ul className="list-disc ml-6 my-7 text-lg font-semibold">
          <li className="">
            <span className=" py-2 px-3">Shubhankar Das (+91 9064632186)</span>
          </li>
          <li className="">
            <span className=" py-2 px-3">Arbendu Pratihar (+91 8597058785)</span>
          </li>
          <li className="">
            <span className=" py-2 px-3">Samridhdha Milia (+91 9804443065)</span>
          </li>
      </ul>

      <p className="text-lg">
        As an alumnus of KGEC, you are automatically part of our community. We
        encourage you to become an active member and contribute to the legacy of
        excellence.
      </p>
    </section>
  );
}
