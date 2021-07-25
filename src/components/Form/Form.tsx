import React, { useState } from 'react'
import { connect } from 'react-redux';
import './styles.css';
import{addPost as addPostAction} from '../../actions/actions';
import {IPosts} from '../Posts/interfaces';
import {IForm} from './interfaces';
const Form = ({onSubmitClick}: IForm) => {

  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [summary, setSummary] = useState('');

  const onSubmit = () => {
    onSubmitClick({heading, subHeading, summary})
  }
  return (
    <React.Fragment>
      <form id="msform">
        <fieldset>
          <h2 className="fs-title">Create Post</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input type="text" name="heading" value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="Heading" />
          <input type="text" name="pass" value={subHeading} onChange={(e) => setSubHeading(e.target.value)} placeholder="Sub-Heading" />
          <textarea name="cpass" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" />
          <input type="button" name="Submit" className="previous action-button" onClick={() => onSubmit()} value="Submit" />
        </fieldset>
      </form>
    </React.Fragment>
  )
}

const mapDispatchToProps  = (dispatch: any) => ({
    onSubmitClick: (post: IPosts) => dispatch(addPostAction(post))
})

export default connect(null, mapDispatchToProps)(Form);