'use client'

export default function NarrowSection() {
  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start max-w-xl [&>p]:text-xl">
        <h1 className="text-4xl font-bold pb-8">Motherfucking Narrow</h1>
        <p>
          Full-width sites aren't inherently bad. I get it. Why not use the
          entire screen? But every time I land on one, I <i>feel</i> annoyed.
          I'm specifically referring to <b>FULL-WIDTH</b> websites—you know the
          ones I mean. I've made attempts to appreciate them, but I just can't
          bring myself to sit down and read through them. I stop caring about
          what they have to say. I get bored. I'd be okay if it were merely a
          design trend, a footnote in web design's ripped-jeans era, but new
          ones keep popping up.
        </p>
        
        <p className="text-2xl font-bold py-8">
          So now I have to create this <a href="http://motherfuckingwebsite.com" className="underline hover:text-gray-600">motherfucking website</a>.
        </p>

        <p className="pb-3">
          The issue stems from designers caring more about impressing their
          peers than meeting user needs.
        </p>

        <p id="but-section">But…</p>
      </main>
    </div>
  )
} 