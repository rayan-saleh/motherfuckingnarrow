'use client'

export default function BottomNarrowSection() {
  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mt-24">
      <main className="flex flex-col gap-4 sm:items-start max-w-xl [&>p]:text-xl">
        <p>
          If that barrage wasnt enough, let me spell it out for you.
        </p>

        {/* numbered reasons why narrow websites are better. make the tites a little bigger */}
        {/* number 1: boost readability */}
        <p className="font-bold pt-8 text-2xl">
          1. Boost Readability
        </p>
        <p>
        A shorter line length matches our natural field of view, helping eyes stay focused and improving comprehension.
        </p>
        <p className="font-bold pt-8 text-2xl">
          2. Mobile-Friendly for free
        </p>
        <p>
        A narrower design is easy to scale down, reducing the need for time-consuming reworks.
        </p>
        <p className="font-bold pt-8 text-2xl">
          3. Visuals have more impact
        </p>
        <p>
        By reserving width for content, visuals can take center stage, making them more impactful.
        </p>
        <p className="font-bold pt-8 text-2xl">
          4. Easier maintenance
        </p>
        <p>
        Narrow websites are easier to maintain, as they require less code and fewer design changes.
        </p>
        <p className="font-bold pt-8 text-2xl">
          5. Enhances Hierarchy
        </p>
        <p>
        A narrower design allows for a more focused hierarchy, making it more accessible and easier to find what you need.
        </p>
        {/* inspire by the bottom of the page with a link to the website */}
        <p className="font-bold pt-8 text-2xl">
          Inspired by <a href="https://dontfuckwithscroll.com/" className="text-blue-500">dontfuckwithscroll.com</a> and made by <a href="https://rayan.ooo" className="text-blue-500">Rayan Saleh</a>
        </p>

      </main>
    </div>
  )
} 