import Link from "next/link";

async function getNotes() {
  const res = await fetch("http://localhost:4000/notes", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function NoteList() {
  const notes = await getNotes();

  return (
    <>
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="cards my-5">
            <Link href={`/notes/${note.id}`}>
              <h3>{note.title}</h3>
              <p>{note.body.slice(0, 200)}...</p>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center">There are no open notes</p>
      )}
    </>
  );
}
