'use client'

export default function BottomNarrowSection() {
  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] mt-24">
      <main className="flex flex-col gap-2 sm:items-start max-w-xl [&>p]:text-xl">
        <p>
        This isn’t just a personal preference—here are a few reasons why narrow websites rule:
        </p>
        <p className="font-bold pt-8 text-2xl">
          1. Boost readability
        </p>
        <p>
        A shorter line length matches our natural field of view, helping eyes stay focused and improving comprehension.
        </p>
        <p className="font-bold pt-8 text-2xl">
          2. Mobile-Friendly by default
        </p>
        <p>
        A narrower design is easy to scale down, reducing the need for time-consuming reworks.
        </p>
        <p className="font-bold pt-8 text-2xl">
          3. Media have more impact
        </p>
        <p>
        By reserving width for content, visuals can take center stage.
        </p>
        <p className="font-bold pt-8 text-2xl">
          4. Easier maintenance
        </p>
        <p>
        Narrow websites are easier to maintain and are more forgiving.
        </p>
        <p className="font-bold pt-8 text-2xl">
          5. Enhances hierarchy
        </p>
        <p>
        A narrower design allows for a more focused hierarchy, making it more accessible and easier to find what you need.
        </p>
        {/* inspire by the bottom of the page with a link to the website */}
        <p className="font-bold pt-8 text-2xl">
          Inspired by <a href="https://dontfuckwithscroll.com/" className="text-blue-500">dontfuckwithscroll.com</a> and <a href="https://motherfuckingwebsite.com/" className="text-blue-500">motherfuckingwebsite.com</a>. Made by <a href="https://rayan.ooo" className="text-blue-500">Rayan Saleh</a>
        </p>

      </main>
    </div>
  )
} 