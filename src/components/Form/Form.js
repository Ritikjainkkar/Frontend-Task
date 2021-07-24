import React, { useState } from 'react'
import './styles.css'
export default function Form() {

  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [summary, setSummary] = useState('');

  const onSubmit = () => {

  }
  return (
    <>
      <form id="msform">
        <fieldset>
          <h2 class="fs-title">Create Post</h2>
          <h3 class="fs-subtitle">This is step 1</h3>
          <input type="text" name="heading" value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="Heading" />
          <input type="text" name="pass" value={subHeading} onChange={(e) => setSubHeading(e.target.value)} placeholder="Sub-Heading" />
          <textarea type="text" name="cpass" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" />
          <input type="button" name="Submit" class="previous action-button" onClick={() => onSubmit()} value="Submit" />
        </fieldset>
      </form>
    </>
  )
}
