export default function ZseniAndreaWebsite() {
  const services = [
    "Alap- és középfokú nyelvvizsga-felkészítés",
    "PWD (gazdasági nyelvvizsga) felkészítés",
    "Vállalati kihelyezett tanfolyamok",
    "Német üzleti kommunikáció",
    "Pénzügyi, számviteli és üzleti német",
    "Magánórák kezdőtől haladóig",
    "Felkészítés külföldi munkavállalásra",
    "Magyar mint idegen nyelv tanítása",
    "Fordítás és tolmácsolás"
  ];

  const testimonials = [
    {
      quote:
        "Annyira személyre szabottan tanított, amire szükségem volt, hogy most, 8 év után is erre építve használom, és szeretem a német nyelvet.",
      author: "M. Zsuzsa"
    },
    {
      quote:
        "Figyelt az aktuális igényekre, a célomra, és rám szabta a feladatokat. Több mint 10 év kihagyás után újra meg mertem szólalni németül, és Andival sikerült!",
      author: "T. Viktória"
    },
    {
      quote:
        "Minimális nyelvtudással indultam, és végül a szakmai némettel is elég jól elboldogultam.",
      author: "H. L. Erzsébet"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700 mb-4">Német nyelvoktatás személyre szabva</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-stone-900">Zseni Andrea</h1>
            <p className="mt-4 text-2xl text-stone-700">Némettanár, fordító és tolmács</p>
            <p className="mt-6 text-lg leading-8 text-stone-600 max-w-xl">
              1992 óta tanítok németet. Célom, hogy tanítványaim magabiztosan, valódi helyzetekben is használható tudással fejlődjenek — legyen szó nyelvvizsgáról, munkáról vagy újrakezdésről.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kapcsolat" className="px-6 py-3 rounded-2xl bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 transition">Kapcsolat</a>
              <a href="#szolgaltatasok" className="px-6 py-3 rounded-2xl bg-white text-stone-800 font-semibold border border-stone-300 hover:border-orange-400 transition">Szolgáltatások</a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200">
            <h2 className="text-2xl font-bold mb-6">Miért engem válassz?</h2>
            <div className="space-y-4 text-stone-700">
              <div>
                <h3 className="font-semibold text-stone-900">Személyre szabott oktatás</h3>
                <p>Minden óra az egyéni célokhoz, szinthez és tanulási tempóhoz igazodik.</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Interaktív, gyakorlatias módszer</h3>
                <p>Nem csak szabályokat tanítok, hanem használható nyelvi kompetenciát építünk.</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Jó hangulat, valódi fejlődés</h3>
                <p>A célorientált, oldott légkör segít leküzdeni a megszólalástól való félelmet is.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-20" id="bemutatkozas">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bemutatkozás</h2>
              <p className="text-lg leading-8 text-stone-700 mb-4">
                Német nyelvtanári diplomámat az ELTE Tanárképző Főiskolai Karán szereztem. Tanítottam általános és középiskolában, érettségiztettem, és közel 30 éve foglalkozom felnőttek nyelvoktatásával nyelviskolai és magánórai keretek között.
              </p>
              <p className="text-lg leading-8 text-stone-700">
                Tapasztalatot szereztem üzleti, pénzügyi és műszaki területen is: vállalati képzések, szaknyelvi oktatás, fordítás, tolmácsolás és külföldi munkavállalásra felkészítés egyaránt része a munkámnak.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
                <p className="text-4xl font-bold text-orange-600">1992</p>
                <p className="mt-2 text-stone-700">óta tanít németet</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
                <p className="text-4xl font-bold text-orange-600">30 év</p>
                <p className="mt-2 text-stone-700">felnőttoktatási tapasztalat</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
                <p className="text-4xl font-bold text-orange-600">Kezdőtől</p>
                <p className="mt-2 text-stone-700">haladóig, vizsgafelkészítésig</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-stone-200" id="szolgaltatasok">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10">Szolgáltatások</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service} className="rounded-3xl border border-stone-200 p-6 shadow-sm bg-stone-50">
                  <p className="text-lg font-medium leading-7">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">Tanítási módszer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold mb-3">Személyiségközpontú megközelítés</h3>
              <p className="text-stone-700 leading-8">Kiemelt figyelmet kap a motiváció fenntartása, a tananyag rugalmas alakítása és a tanuló aktuális céljaihoz igazított fejlődés.</p>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold mb-3">Gyakorlati kommunikáció</h3>
              <p className="text-stone-700 leading-8">Az órák fókusza a valós élethelyzetekben használható nyelvtudás, a magabiztos megszólalás és a nyelvi gátak oldása.</p>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold mb-3">Logikus, érthető rendszer</h3>
              <p className="text-stone-700 leading-8">Nem száraz szabályok memorizálása történik, hanem a német nyelv belső összefüggéseinek megértése és tudatos használata.</p>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold mb-3">Célorientált fejlődés</h3>
              <p className="text-stone-700 leading-8">Legyen szó nyelvvizsgáról, állásról vagy szakmai kommunikációról, az oktatás mindig a konkrét célhoz igazodik.</p>
            </div>
          </div>
        </section>

        <section className="bg-stone-900 text-white">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10">Vélemények</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <div key={item.author} className="bg-white/10 rounded-3xl p-6 border border-white/10">
                  <p className="text-lg leading-8">“{item.quote}”</p>
                  <p className="mt-4 text-orange-200 font-semibold">— {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-20" id="kapcsolat">
          <div className="bg-white rounded-3xl p-10 border border-stone-200 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Kapcsolat</h2>
            <p className="text-lg text-stone-700 leading-8">
              Várom azok jelentkezését, akik szeretnének magabiztosabban kommunikálni németül, nyelvvizsgára készülnek, vagy szakmai céljaikhoz keresnek személyre szabott támogatást.
            </p>
            <div className="mt-8 text-stone-600 space-y-2">
              <p><span className="font-semibold">E-mail:</span> sajat.email@pelda.hu</p>
              <p><span className="font-semibold">Telefon:</span> +36 30 123 4567</p>
              <p><span className="font-semibold">Helyszín:</span> online és személyesen megbeszélés szerint</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
