import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Home?</h2>
      <p>Hey, mind to see the note that people left? Mind to left a note? And i didn't really made this web for phone yet...</p>

      <div className="flex justify-center my-8">
        <Link href="/notes">
          <button className="btn-primary">View Note</button>
        </Link>
      </div>

      <h2>Huh?</h2>

      <div className="card">
        <h3>Hello</h3>
        <p>I don't know, maybe just left something here so maybe you will be remember? If you want.</p>
        <div className="hide">hm?</div>
      </div>
      <div className="card">
        <h3>Bye</h3>
        <p>I'm still alive?</p>
        <div className="hide">pssttt, here a link: https://youtube.com/shorts/615m5f3nX5A?si=1aTSPl2xaggyyX87 and don't let the creator know this</div>
      </div>
    </main>
  );
}
