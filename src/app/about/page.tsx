export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">About</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Photo placeholder */}
        <div className="aspect-[3/4] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
          Artist photo
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-5 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-semibold text-gray-900">Jane Doe</h2>
          <p>
            Jane Doe is a visual artist based in Prague, working across
            painting, photography, and mixed media. Her practice centres on
            the tension between presence and absence — the traces left behind
            by light, time, and human touch.
          </p>
          <p>
            After studying Fine Arts at the Academy of Arts in Prague, Jane
            has exhibited her work across Europe and participated in several
            artist residencies. She currently works from her studio in
            Vinohrady.
          </p>
          <p>
            Her recent series explores everyday domestic spaces as sites of
            memory and longing, using layered paint and photographic elements
            to evoke a sense of familiar strangeness.
          </p>

          <div className="mt-4 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Selected Exhibitions
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>2024 — <span className="text-gray-900">Still Here</span>, Gallery XYZ, Prague</li>
              <li>2023 — <span className="text-gray-900">Group Show: New Voices</span>, Vienna Art Week</li>
              <li>2022 — <span className="text-gray-900">Residency Exhibition</span>, Cite des Arts, Paris</li>
              <li>2021 — <span className="text-gray-900">Quiet Things</span>, Solo show, Brno</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}