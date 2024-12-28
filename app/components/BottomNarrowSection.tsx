'use client'

export default function BottomNarrowSection() {
  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mt-24">
      <main className="flex flex-col gap-2 sm:items-start max-w-xl 2xl:max-w-2xl [&>p]:text-xl 2xl:[&>p]:text-2xl">
        <p>
        The client wanted something <b>bold</b>, and with a six-figure budget, you can’t settle for simple. So why not go all out? 
        <br />
        <br />
        Well, because <b>FULL-WIDTH</b> disrupts the web browsing experience and degrades usability. While <i>NARROW</i> websites:

        </p>
        <p className="font-bold pt-8 text-2xl 2xl:text-3xl">
          1. Boosts readability
        </p>
        <p>
          A shorter line length matches our natural field of view, helping eyes stay focused and improving comprehension.
        </p>
        <p className="font-bold pt-8 text-2xl 2xl:text-3xl">
          2. Are responsive by default
        </p>
        <p>
          A narrower design is easy to scale down, reducing the need to redo the design for mobile.
        </p>
        <p className="font-bold pt-8 text-2xl 2xl:text-3xl">
          3. Make multimedia more impactful
        </p>
        <p>
          By reserving width for content, visuals can take center stage.
        </p>
        <p className="font-bold pt-8 text-2xl 2xl:text-3xl">
          4. Are easier to maintain
        </p>
        <p>
          When you focus on the content, you can make the design more forgiving.
        </p>
        <p className="font-bold pt-8 text-2xl 2xl:text-3xl">
          5. Allow for a clearer hierarchy
        </p>
        <p>
          Making the website easier to navigate and more accessible.
        </p>
        <p>
          <br />
          <br />
          <br />
          So next time you're planning a new design, consider the user’s goals. In most cases, <b>FULL WIDTH</b> only adds complexity, reduces usability, and ultimately frustrates users.
        </p>

        {/* thin grey line gap */}
        <div className="h-0.5 bg-gray-200 w-full mt-24"></div>
        <p className="font-bold pt-8 text-2xl 2xl:text-3xl">
          Inspired by <a href="https://dontfuckwithscroll.com/" className="text-blue-500">dontfuckwithscroll.com</a> and <a href="https://motherfuckingwebsite.com/" className="text-blue-500">motherfuckingwebsite.com</a>. Made by <a href="https://rayan.ooo" className="text-blue-500">Rayan Saleh</a>
        </p>
      </main>
    </div>
  )
} 