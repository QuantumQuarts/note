import CreateForm from "./CreateForm.jsx";

export default async function CreateNote() {
  return (
    <main>
      <h2 className="text-center">Create a New Note</h2>
      <p className="text-center">Just write what ever you want, it's fine</p>
      <br />
      <CreateForm />
      <br />
      <div className="hide">hey, here: https://youtu.be/_0gfSl0tTIY?si=uq8IsZZfPAD-sO2i</div>
    </main>
  );
}
