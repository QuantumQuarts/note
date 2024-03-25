import { Suspense } from "react";
import NoteList from "./NoteList.jsx";
import Loading from "../loading.jsx";
import Link from "next/link";

export const metadata = {
  title: "Dojo Helpdesk | Tickets",
};

export default function Notes() {
  return (
    <main>
      <nav>
        <div>
          <h2>Notes</h2>
          <p>
            <small>Currently open notes.</small>
          </p>
        </div>
        <Link href="/notes/create" className="ml-auto">
          <button className="btn-primary">Add Note</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <NoteList />
      </Suspense>
    </main>
  );
}
