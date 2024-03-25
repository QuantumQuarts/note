"use client";

import React, { useState } from "react";

export default function SubmitButton() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async () => {
    try {
      setPending(true);
      await submitForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <button disabled={pending} className="btn-primary" onClick={handleSubmit}>
      {pending ? <span>Submitting...</span> : <span>Submit</span>}
    </button>
  );
}
