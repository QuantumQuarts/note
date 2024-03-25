import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/notes");

  const notes = await res.json();

  return notes.map((note) => ({
    id: note.id,
  }));
}

async function getNote(id) {
  const res = await fetch(`http://localhost:4000/notes/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function NoteDetails({ params }) {
  const note = await getNote(params.id);

  return (
    <main>
      <nav>
        <h2>Note Details</h2>
      </nav>
      <div className="cards">
        <h3>{note.title}</h3>
        <p>{note.body}</p>
      </div>
      <Link href="/notes">
        <button className="btn-primary">Back</button>
      </Link>
    </main>
  );
}
