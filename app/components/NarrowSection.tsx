'use client'

export default function NarrowSection() {
  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start max-w-xl 2xl:max-w-2xl [&>p]:text-xl 2xl:[&>p]:text-xl">
        <h1 className="text-4xl 2xl:text-5xl font-bold pb-8">Motherfucking Narrow</h1>
        <p>
          Full-width sites aren't inherently bad. I get it. Why not use the
          entire screen? But every time I visit one, they <i>feel</i> inferior.
          <br /> 
          <br />
          <br />
          I'm specifically referring to <b>FULL-WIDTH</b> websites—you know the
          ones I mean. I wouldn’t mind if this was just a trend, a footnote in web design's ripped-jeans era, but they don’t seem to be going away.
          <br />
          <br />
          <br />
          So now I have to create this <a href="http://motherfuckingwebsite.com" className="underline hover:text-gray-600">motherfucking website</a>.
          <br />
          <br />
          <br />
          The issue stems from designers caring more about impressing their
          peers or clients than meeting user needs.
          <br />
          <br />
          <br />
          But…
        </p>
        
      </main>
    </div>
  )
} 